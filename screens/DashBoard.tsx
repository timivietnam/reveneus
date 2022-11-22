import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import {
  Container,
  Text,
  HeaderUser,
  OverViewItem,
  ProjectItem,
  VStack,
} from 'components';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { userSelector } from 'store/slices/userSlice';
import { useAppSelector } from 'store/store';
import { useBoolean, useLayout } from 'hooks';

import {
  GetUserGeneralQueryVariables,
  ProjectFragment,
  useGetUserGeneralQuery,
} from 'sdk';
import numeral from 'numeral';
import { IOverView } from 'constants/types';
import keyExtractor from 'utils/keyExtractor';
import { DrawerStackParamList } from 'navigation/types';

const LIMIT = 20;

type OverView = {
  count_project: number;
  count_progress: number;
  total_profit: number;
  total_cost: number;
  rating: number;
  review: number;
  yearly: number;
};

const initValue = {
  count_project: 0,
  count_progress: 0,
  total_profit: 0,
  total_cost: 0,
  rating: 0,
  review: 0,
  yearly: 0,
};

const DashBoard = () => {
  const { bottom, width } = useLayout();
  const { user } = useAppSelector(userSelector);
  const { navigate } = useNavigation<NavigationProp<DrawerStackParamList>>();
  const [showSearch, { on, off }] = useBoolean(false);
  const [limit, setLimit] = React.useState<number>(LIMIT);
  const [search, setSearch] = React.useState<string>('');

  const [overview, setOverView] = React.useState<OverView>(initValue);

  const { data, loading, fetchMore, refetch } = useGetUserGeneralQuery({
    variables: {
      offset: 0,
      limit: limit,
      user_id: user.id,
      _ilike: `%${search || ''}%`,
    },
    fetchPolicy: 'network-only',
  });

  React.useEffect(() => {
    let _count_project = 0;
    let _count_progress = 0;
    let _total_cost_members = 0;
    let _total_profit = 0;
    let _total_cost = 0;

    if (data) {
      for (const projectMember of data.project_members) {
        _total_cost_members =
          +projectMember.hour_rate * projectMember.hour_working;
      }
      _count_project = data.all_project.aggregate?.count || 0;
      _count_progress = data.all_in_progress_project.aggregate?.count || 0;
      _total_profit =
        data.total_budget.aggregate?.sum?.amount -
        data.total_cost.aggregate?.sum?.amount -
        _total_cost_members;
      _total_cost =
        data.total_cost.aggregate?.sum?.amount + _total_cost_members;

      setOverView({
        count_project: _count_project,
        count_progress: _count_progress,
        total_profit: _total_profit,
        total_cost: _total_cost,
        rating: 0,
        review: 0,
        yearly: 0,
      });
    }
  }, [data]);

  const fetchData = React.useCallback(
    async (isLoadMore?: boolean) => {
      if (isLoadMore) {
        const currentLength = data?.in_progress_projects
          ? data.in_progress_projects.length
          : 0;
        const variables: GetUserGeneralQueryVariables = {
          offset: currentLength,
          _ilike: `%${search}%`,
          user_id: user.id,
        };
        const { data: dataLoadMore } = await fetchMore({
          variables,
        });
        setLimit(currentLength + dataLoadMore.in_progress_projects.length);
      } else {
        setLimit(100);
        await refetch({
          limit: 20,
          offset: 0,
          _ilike: `%${search}%`,
          user_id: user.id,
        });
      }
    },
    [search, data?.in_progress_projects, user],
  );

  const overview_data: IOverView[] = React.useMemo(
    () => [
      {
        title: 'Inprogress Project',
        value: `${overview.count_progress}/${overview.count_project}`,
      },
      {
        title: 'Net Profit',
        value: `${numeral(overview.total_profit).format('$0,0.00')}`,
        secondTitle: 'yearly',
        secondValue: `+${overview.yearly}%`,
      },
      {
        title: 'Business Cost',
        value: `${numeral(overview.total_cost).format('$0,0.00')}`,
      },
      {
        title: 'Rating',
        value: `${overview.rating}/5`,
        description: `(${overview.review} Review)`,
      },
    ],
    [overview],
  );

  const renderOverView = React.useCallback(({ item }: { item: IOverView }) => {
    return <OverViewItem item={item} />;
  }, []);

  // const renderUpcomingCalendar = React.useCallback(
  //   ({ item }: { item: Calendar }) => {
  //     return <UpcomingItem item={item} style={styles.upcoming} />;
  //   },
  //   [],
  // );

  const renderProject = React.useCallback(
    ({ item }: { item: ProjectFragment }) => {
      return (
        <VStack mr={16}>
          <ProjectItem
            item={item}
            enabled={false}
            onPress={() => {
              if (item.id) {
                navigate('Project', {
                  screen: 'ProjectDetails',
                  params: { id: item.id },
                });
              }
            }}
          />
        </VStack>
      );
    },
    [],
  );

  const listHeaderComponent = React.useCallback(() => {
    return (
      <View>
        <Text category="h2" marginHorizontal={16}>
          DashBoard
        </Text>
        <FlatList
          data={overview_data || []}
          horizontal
          keyExtractor={keyExtractor}
          renderItem={renderOverView}
          snapToInterval={width - 162}
          bounces={false}
          pagingEnabled={false}
          decelerationRate="fast"
          contentContainerStyle={styles.contentOverview}
          showsHorizontalScrollIndicator={false}
        />
        {/* <View
          style={[styles.calendar, { borderColor: theme['color-basic-300'] }]}
        >
          <View style={styles.rowCalendar}>
            <Text
              uppercase
              category="s2-bold"
              marginBottom={24}
              marginLeft={16}
              status="title"
            >
              upcoming calendar
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.calendarButton}
              onPress={() => navigate('Calendar')}
            >
              <Icon pack="assets" name="calendar" style={styles.icon16} />
            </TouchableOpacity>
          </View>
          {isEmpty(calendars) ? (
            <Text category="s1" center status="describe">
              Please add a new calendar
            </Text>
          ) : (
            <FlatList
              data={calendars}
              horizontal
              snapToInterval={width - 16 * 3}
              bounces={false}
              pagingEnabled={false}
              decelerationRate="fast"
              keyExtractor={keyExtractor}
              showsHorizontalScrollIndicator={false}
              renderItem={renderUpcomingCalendar}
            />
          )}
        </View> */}
        <Text category="s2" capitalize marginBottom={16} marginLeft={16}>
          Project Inprogress
        </Text>
      </View>
    );
  }, [overview]);

  return (
    <Container useSafeArea={false}>
      <HeaderUser
        showSearch={showSearch}
        onSearch={on}
        searchProps={{
          value: search,
          onChangeText: setSearch,
          placeholder: 'Search project',
        }}
      />
      <FlatList
        data={data?.in_progress_projects || []}
        renderItem={renderProject}
        keyExtractor={keyExtractor}
        contentContainerStyle={[{ paddingBottom: bottom + 16 }]}
        onTouchStart={off}
        refreshing={loading}
        onRefresh={refetch}
        // onEndReached={() => fetchData(true)}
        ListHeaderComponent={listHeaderComponent}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default DashBoard;

const styles = StyleSheet.create({
  contentOverview: {
    paddingLeft: 16,
    marginTop: 16,
    marginBottom: 24,
  },
  calendar: {
    borderRadius: 12,
    borderWidth: 1,
    marginHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 24,
  },
  buttonAdd: {
    borderWidth: 1,
    borderRadius: 12,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 24,
  },
  upcoming: {
    marginLeft: 16,
  },
  rowCalendar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  calendarButton: {
    width: 40,
    height: 40,
  },
  icon16: {
    width: 16,
    height: 16,
  },
});
