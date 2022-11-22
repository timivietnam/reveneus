import React from 'react';
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Container, HeaderUser, MemberItem, Text } from 'components';
import { Icon, Layout, Modal } from '@ui-kitten/components';
import { useAppDispatch, useAppSelector } from 'store/store';
import { useBoolean, useLayout, useModal } from 'hooks';
import { userSelector } from 'store/slices/userSlice';
import { useTranslation } from 'react-i18next';

import AddTeamMember from './AddTeamMember';

import {
  MemberFragment,
  NamedOperations,
  useAddMemberMutation,
  useUpdateMemberMutation,
} from 'sdk';
import keyExtractor from 'utils/keyExtractor';
import { showMessage } from 'hooks/ToastService';
import { setAppLoading } from 'store/slices/appSlice';
import { useGetTeamMemberQuery, GetTeamMemberQueryVariables } from 'sdk';

const LIMIT = 20;

const TeamMember = React.memo(() => {
  const dispatch = useAppDispatch();
  const { bottom } = useLayout();
  const { user } = useAppSelector(userSelector);
  const { t } = useTranslation(['common', 'home']);

  const { modalRef, show, hide } = useModal();
  const [showSearch, { on, off }] = useBoolean(false);
  const [search, setSearch] = React.useState<string>('');

  const [limit, setLimit] = React.useState<number>(LIMIT);
  const [member, setMember] = React.useState<MemberFragment | undefined>(
    undefined,
  );

  const refetchQueries = [
    NamedOperations.Query.GetTeamMember,
    NamedOperations.Query.GetUserGeneral,
  ];

  const [AddMember] = useAddMemberMutation({ refetchQueries });
  const [UpdateMember] = useUpdateMemberMutation({ refetchQueries });

  const { data, loading, fetchMore, refetch } = useGetTeamMemberQuery({
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
        const currentLength = data?.members ? data.members.length : 0;
        const variables: GetTeamMemberQueryVariables = {
          offset: currentLength,
          _ilike: `%${search}%`,
          user_id: user.id,
        };
        const { data: dataLoadMore } = await fetchMore({
          variables,
        });
        setLimit(currentLength + dataLoadMore.members.length);
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

  const handleSubmit = React.useCallback(
    async ({
      avatar_url,
      full_name,
      role,
      hour_rate,
      is_active,
    }: Pick<
      MemberFragment,
      'avatar_url' | 'full_name' | 'role' | 'hour_rate' | 'is_active'
    >) => {
      try {
        dispatch(setAppLoading(true));
        if (member) {
          const memberExisted = data?.members.find(
            (i) => i.id !== member.id && i.full_name === full_name,
          );
          if (memberExisted) {
            hide();
            showMessage({
              text1: `Member ${full_name} already exists`,
              type: 'error',
            });
            return;
          }
          const { data: dataUpdated, errors: errUpdated } = await UpdateMember({
            variables: {
              id: member.id,
              input: {
                user_id: member.user_id,
                avatar_url: avatar_url,
                full_name: full_name,
                role: role,
                hour_rate: parseFloat(hour_rate),
                is_active: is_active,
              },
            },
          });
          if (dataUpdated) {
            hide();
            showMessage({
              text1: `Update ${full_name} success`,
              type: 'success',
            });
          } else {
            showMessage({
              text1: `Update ${full_name} failed`,
              type: 'error',
            });
            console.log('errUpdated ', errUpdated);
          }
        } else {
          const memberExisted = data?.members.find(
            (i) => i.full_name === full_name,
          );
          if (memberExisted) {
            hide();
            showMessage({
              text1: `Member ${full_name} already exists`,
              type: 'error',
            });
            return;
          }
          const { data: dataAdded, errors: errAdded } = await AddMember({
            variables: {
              input: {
                user_id: user.id,
                avatar_url: avatar_url,
                full_name: full_name,
                role: role,
                hour_rate: parseFloat(hour_rate),
                is_active: is_active,
              },
            },
          });
          if (dataAdded) {
            hide();
            showMessage({
              text1: `Add ${full_name} member success`,
              type: 'success',
            });
          } else {
            showMessage({
              text1: `Add ${full_name} member failed`,
              type: 'error',
            });
            console.log('errUpdated ', errAdded);
          }
        }
      } finally {
        dispatch(setAppLoading(false));
      }
    },
    [member, data, user],
  );

  const renderItem = React.useCallback(({ item }: { item: MemberFragment }) => {
    return (
      <MemberItem
        item={item}
        onPress={() => {
          setMember(item);
          setTimeout(() => {
            show();
          }, 100);
        }}
      />
    );
  }, []);

  const ListHeaderComponent = React.useCallback(
    () => (
      <Layout style={styles.header}>
        <Text category="h2">{t('home:team_member')}</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            setMember(undefined);
            setTimeout(() => {
              show();
            }, 100);
          }}
        >
          <Icon pack="assets" name="plus" style={styles.icon} />
        </TouchableOpacity>
      </Layout>
    ),
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
          placeholder: 'Search member',
        }}
      />
      <FlatList
        data={data?.members || []}
        renderItem={renderItem}
        numColumns={2}
        stickyHeaderIndices={[0]}
        keyExtractor={keyExtractor}
        onTouchStart={off}
        refreshing={loading}
        onRefresh={refetch}
        onEndReached={() => fetchData(true)}
        contentContainerStyle={[styles.content, { paddingBottom: bottom }]}
        ListHeaderComponent={ListHeaderComponent}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapperStyle}
      />
      <Modal
        ref={modalRef}
        onBackdropPress={hide}
        backdropStyle={styles.backdrop}
      >
        <AddTeamMember
          onHide={hide}
          member={member}
          onSubmit={handleSubmit}
          listMember={data?.members || []}
        />
      </Modal>
    </Container>
  );
});

export default TeamMember;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  icon: {
    width: 32,
    height: 32,
  },
  backdrop: {
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
});
