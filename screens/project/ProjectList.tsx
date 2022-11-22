import React from 'react';
import { Icon } from '@ui-kitten/components';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import {
  Container,
  Text,
  ProjectItem,
  HeaderUser,
  ModalConfirm,
} from 'components';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useBoolean, useLayout, useModal } from 'hooks';
import { userSelector } from 'store/slices/userSlice';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'store/store';

import {
  GetProjectQueryVariables,
  NamedOperations,
  ProjectFragment,
  useGetProjectQuery,
  useRemoveProjectMutation,
} from 'sdk';
import keyExtractor from 'utils/keyExtractor';
import { ProjectStackParamList } from 'navigation/types';
import { showMessage } from 'hooks/ToastService';

const LIMIT = 20;

const ProjectList = React.memo(() => {
  const { bottom } = useLayout();
  const { t } = useTranslation();
  const user = useAppSelector(userSelector).user;
  const { modalRef, show, hide } = useModal();
  const { navigate } = useNavigation<NavigationProp<ProjectStackParamList>>();

  const [showSearch, { on, off }] = useBoolean(false);
  const [search, setSearch] = React.useState<string>('');
  const [limit, setLimit] = React.useState<number>(LIMIT);
  const [project, setProject] = React.useState<ProjectFragment>();

  const [DeleteProject] = useRemoveProjectMutation({
    refetchQueries: [
      NamedOperations.Query.GetProject,
      NamedOperations.Query.GetUserGeneral,
    ],
  });

  const { data, loading, fetchMore, refetch } = useGetProjectQuery({
    variables: {
      offset: 0,
      limit: limit,
      user_id: user.id,
      _ilike: `%${search || ''}%`,
    },
    fetchPolicy: 'network-only',
  });

  const fetchData = React.useCallback(
    async (isLoadMore?: boolean) => {
      if (isLoadMore) {
        const currentLength = data?.projects ? data.projects.length : 0;
        const variables: GetProjectQueryVariables = {
          offset: currentLength,
          _ilike: `%${search}%`,
          user_id: user.id,
        };
        const { data: dataLoadMore } = await fetchMore({
          variables,
        });
        setLimit(currentLength + dataLoadMore.projects.length);
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
    [search, data, user],
  );

  const handleDelete = React.useCallback(async () => {
    const { errors } = await DeleteProject({
      variables: { id: project?.id },
    });
    if (!errors) {
      hide();
    } else {
      showMessage({
        text1: `Delete project ${project?.name} failed`,
        type: 'error',
      });
    }
  }, [project]);

  const listHeaderComponent = React.useCallback(() => {
    return (
      <View style={styles.headerComponent}>
        <Text category="h2" marginLeft={16}>
          {t('project')}
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigate('CreateEditProject', { project: undefined })}
        >
          <Icon pack="assets" name="plus" style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }, [user]);

  const renderItem = React.useCallback(
    ({ item }: { item: ProjectFragment }) => {
      return (
        <ProjectItem
          item={item}
          onPress={() => {
            if (item.id) {
              navigate('ProjectDetails', { id: item.id });
            }
          }}
          onEdit={() => navigate('CreateEditProject', { project: item })}
          onDelete={() => {
            setProject(item);
            setTimeout(() => {
              show();
            }, 100);
          }}
          enabled
        />
      );
    },
    [],
  );

  return (
    <Container style={styles.container} useSafeArea={false}>
      <HeaderUser
        showSearch={showSearch}
        onSearch={on}
        searchProps={{
          value: search,
          onChangeText: setSearch,
          placeholder: t('search_project'),
        }}
      />
      <FlatList
        data={data?.projects || []}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        refreshing={loading}
        onRefresh={refetch}
        // onEndReached={() => fetchData(true)}
        ListHeaderComponent={listHeaderComponent}
        showsVerticalScrollIndicator={false}
        onTouchStart={off}
        contentContainerStyle={[
          styles.contentContainer,
          {
            paddingBottom: bottom + 16,
          },
        ]}
      />
      <ModalConfirm
        ref={modalRef}
        title={t('delete_project')}
        description={t('description_delete_project')}
        buttonLeft={{ onPress: hide }}
        buttonRight={{
          title: t('delete'),
          onPress: handleDelete,
        }}
      />
    </Container>
  );
});

export default ProjectList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerComponent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginTop: 12,
    alignItems: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
  contentContainer: {
    marginRight: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 3,
    marginLeft: 8,
  },
  input: {
    width: '100%',
  },
  search: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
