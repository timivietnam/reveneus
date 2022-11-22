import React from 'react';
import _ from 'lodash';
import {
  Alert,
  FlatList,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  Button,
  Icon,
  Layout,
  Modal,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';
import { useBoolean, useLayout } from 'hooks';
import { Avatar, HourInput, HStack, Text, VStack } from 'components';
import { useTranslation } from 'react-i18next';

import {
  ProjectMemberFragment,
  useRemoveProjectMemberMutation,
  NamedOperations,
  useUpdateProjectMemberListMutation,
  ProjectMember_Updates,
} from 'sdk';
import { showMessage } from 'hooks/ToastService';
import keyExtractor from 'utils/keyExtractor';
import { useAppDispatch } from 'store/store';
import { setAppLoading } from 'store/slices/appSlice';

interface IModalListProjectMemberProps {
  listProjectMember: ProjectMemberFragment[];
  onAddProjectMember?(): void;
}

function ModalListProjectMember(
  { listProjectMember, onAddProjectMember }: IModalListProjectMemberProps,
  ref: React.ForwardedRef<{ show: () => void; hide: () => void }>,
) {
  const dispatch = useAppDispatch();
  const { width } = useLayout();
  const styles = useStyleSheet(themedStyles);
  const { t } = useTranslation(['home', 'common']);
  const modalRef = React.useRef<Modal>(null);
  const [visible, { on, off }] = useBoolean(false);
  const [list, setList] = React.useState<ProjectMemberFragment[] | undefined>(
    [],
  );
  React.useEffect(() => {
    setList(listProjectMember);
  }, [listProjectMember]);
  React.useImperativeHandle(ref, () => ({
    show: () => {
      modalRef.current?.show();
    },
    hide: () => {
      modalRef.current?.hide();
    },
  }));

  const hide = React.useCallback(() => {
    modalRef.current?.hide();
    off();
  }, []);

  const [updateBudgetListMutation] = useUpdateProjectMemberListMutation({
    variables: {
      updates: [],
    },
    refetchQueries: [
      NamedOperations.Query.getListProjectMember,
      NamedOperations.Query.GetUserGeneral,
    ],
  });

  const handleUpdate = React.useCallback(async () => {
    dispatch(setAppLoading(true));
    const newListupdate: ProjectMember_Updates[] = _.map(list, (item) => {
      return {
        where: { id: { _eq: item.id } },
        _set: { hour_working: parseFloat(item.hour_working) },
      };
    });
    const { data, errors } = await updateBudgetListMutation({
      variables: {
        updates: [...newListupdate],
      },
      refetchQueries: [
        NamedOperations.Query.getListProjectMember,
        NamedOperations.Query.GetUserGeneral,
      ],
    });
    if (data) {
      dispatch(setAppLoading(false));
      showMessage({ type: 'success', text1: 'Done' });
      hide();
    } else {
      dispatch(setAppLoading(false));
      showMessage({ type: 'error', text1: 'false' });
      console.log(errors);
      hide();
    }
  }, [list]);
  const handleChangeInput = React.useCallback(
    (value: string, member: ProjectMemberFragment) => {
      if (list) {
        // console.log(parseFloat(value));
        const newBudgets = list.map((item, index) => {
          const hourWorking =
            item.id === member.id
              ? parseFloat(value)
              : parseFloat(item.hour_working);
          return {
            ...item,
            hour_working: hourWorking,
          };
        });
        setList([...newBudgets]);
      } else {
        console.log('fail');
      }
    },
    [list],
  );

  const [removeProjectMember] = useRemoveProjectMemberMutation({
    refetchQueries: [
      NamedOperations.Query.GetUserGeneral,
      NamedOperations.Query.GetProjectDetailsById,
      NamedOperations.Query.getListProjectMember,
    ],
  });

  const handleRemoveProjectMember = (item: ProjectMemberFragment) => {
    Alert.alert('You want remove this member?', '', [
      {
        text: 'Delete',
        onPress: () => {
          removeProjectMember({
            variables: {
              id: item.id,
            },
          })
            .then((res) => {
              showMessage({
                type: 'success',
                text1: `Success remove.`,
              });
            })
            .catch((err) => {
              showMessage({
                type: 'error',
                text1: `err`,
              });
            });
        },
        style: 'destructive',
      },
      {
        text: 'Cancel',
        style: 'default',
      },
    ]);
  };
  const ListEmptyComponent = () => {
    return (
      <TouchableOpacity style={styles.buttonAdd} onPress={onAddProjectMember}>
        <Text category="s1" status="platinum">
          + {t('home:add_members')}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <Modal
      ref={modalRef}
      visible={visible}
      onBackdropPress={hide}
      backdropStyle={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Layout style={[styles.modal, { width: width - 32 }]}>
          <HStack itemsCenter mb={32}>
            <Text category="h2" status="platinum">
              {t('home:members_list')}
            </Text>
            <TouchableOpacity onPress={hide}>
              <Icon pack="assets" name="delete" style={styles.iconClose} />
            </TouchableOpacity>
          </HStack>
          <FlatList
            data={list}
            keyExtractor={keyExtractor}
            ListEmptyComponent={ListEmptyComponent}
            renderItem={({ item }) => {
              return (
                <HStack itemsCenter mb={28}>
                  <HStack itemsCenter>
                    <Avatar
                      name={item.Member.full_name}
                      src={item.Member.avatar_url}
                      size={40}
                      borderRadius={99}
                    />
                    <VStack ml={8}>
                      <Text category="t4">{item.Member.full_name}</Text>
                      <Text category="c2" opacity={0.5} status="warning">
                        ${item.Member.hour_rate}/hour
                      </Text>
                    </VStack>
                  </HStack>
                  <HourInput
                    value={`${item.hour_working}`}
                    onChangeText={(value) => {
                      on();
                      if (value) {
                        handleChangeInput(value, item);
                      } else {
                        handleChangeInput('0', item);
                      }
                    }}
                    placeholder={t('common:amount')}
                    style={styles.inputBox}
                    accessoryRight={() => (
                      <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {
                          handleRemoveProjectMember(item);
                        }}
                        style={styles.iconTrash}
                      >
                        <Icon pack="assets" name="trash" />
                      </TouchableOpacity>
                    )}
                  />
                </HStack>
              );
            }}
          />
          <Button
            children={t('common:update')}
            onPress={handleUpdate}
            style={styles.add}
          />
        </Layout>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

export default React.forwardRef(ModalListProjectMember) as (
  props: IModalListProjectMemberProps & {
    ref?: React.ForwardedRef<{ show: () => void; hide: () => void }>;
  },
) => ReturnType<typeof ModalListProjectMember>;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(30, 31, 32, 0.86)',
  },
  modal: {
    padding: 24,
    borderRadius: 12,
  },
  iconClose: {
    tintColor: 'text-basic-color',
    width: 24,
    height: 24,
  },
  inputBox: {
    width: '45%',
    paddingBottom: 12,
  },
  add: {
    alignSelf: 'flex-end',
    width: '40%',
  },
  iconTrash: {
    width: 16,
    height: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  buttonAdd: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'color-basic-400',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
    marginBottom: 24,
  },
});
