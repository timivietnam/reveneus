import React from 'react';
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
import { CurrencyInput, HStack, Text, VStack } from 'components';
import { useTranslation } from 'react-i18next';

import {
  BudgetFragment,
  Budget_Updates,
  NamedOperations,
  useRemoveBudgetMutation,
  useUpdateBudgetListMutation,
} from 'sdk';
import { showMessage } from 'hooks/ToastService';
import dayjs from 'dayjs';
import _ from 'lodash';
import keyExtractor from 'utils/keyExtractor';

interface IModalListBudgetProps {
  listBudget: BudgetFragment[] | undefined;
  _onAddBudget(): void;
}

function ModalListBudget(
  { listBudget, _onAddBudget }: IModalListBudgetProps,
  ref: React.ForwardedRef<{ show: () => void; hide: () => void }>,
) {
  const { width } = useLayout();
  const styles = useStyleSheet(themedStyles);
  const { t } = useTranslation(['home', 'common']);
  const modalRef = React.useRef<Modal>(null);
  const [visible, { on, off }] = useBoolean(false);
  const [listBudgets, setList] = React.useState<BudgetFragment[] | undefined>(
    [],
  );

  React.useEffect(() => {
    setList(listBudget);
  }, [listBudget]);

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

  const refetchQueries = [
    NamedOperations.Query.GetProjectDetailsById,
    NamedOperations.Query.GetUserGeneral,
  ];

  const [updateBudgetListMutation] = useUpdateBudgetListMutation({
    variables: {
      updates: [],
    },
    refetchQueries,
  });

  const handleUpdate = React.useCallback(async () => {
    const newListupdate: Budget_Updates[] = _.map(listBudgets, (item) => {
      return {
        where: { id: { _eq: item.id } },
        _set: { amount: item.amount },
      };
    });

    const { data } = await updateBudgetListMutation({
      variables: {
        updates: newListupdate,
      },
      refetchQueries,
    });
    if (data) {
      showMessage({ type: 'success', text1: 'Done' });
      hide();
    } else {
      showMessage({ type: 'error', text1: 'false' });
    }
  }, [listBudgets]);

  const handleChangeInput = React.useCallback(
    (value: string, budget: BudgetFragment) => {
      if (listBudgets) {
        const newBudgets = listBudgets.map((item) => {
          const amount =
            item.id === budget.id ? parseFloat(value) : item.amount;
          return {
            ...item,
            amount,
          };
        });
        setList([...newBudgets]);
      }
    },
    [listBudgets],
  );

  const [removeBudget] = useRemoveBudgetMutation({
    refetchQueries,
  });

  const handleRemoveBudget = (item: BudgetFragment) => {
    Alert.alert('You want delete this budget?', '', [
      {
        text: 'Delete',
        onPress: () => {
          removeBudget({
            variables: {
              _id: item.id,
            },
          })
            .then((res) => {
              showMessage({
                type: 'success',
                text1: `Success remove ${item.name}.`,
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
      <TouchableOpacity style={styles.buttonAdd} onPress={_onAddBudget}>
        <Text category="s1" status="platinum">
          + {t('home:add_budget')}
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
              {t('home:budget_list')}
            </Text>
            <TouchableOpacity onPress={hide}>
              <Icon pack="assets" name="delete" style={styles.iconClose} />
            </TouchableOpacity>
          </HStack>
          <FlatList
            data={listBudgets}
            keyExtractor={keyExtractor}
            ListEmptyComponent={ListEmptyComponent}
            renderItem={({ item }) => {
              return (
                <HStack itemsCenter mb={28}>
                  <VStack>
                    <Text category="t4">{item.name}</Text>
                    <Text category="c2" opacity={0.5}>
                      {dayjs(item.updated_at).format('DD/MM/YYYY')}
                    </Text>
                  </VStack>
                  <CurrencyInput
                    value={`${item.amount}`}
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
                          handleRemoveBudget(item);
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

export default React.forwardRef(ModalListBudget) as (
  props: IModalListBudgetProps & {
    ref?: React.ForwardedRef<{ show: () => void; hide: () => void }>;
  },
) => ReturnType<typeof ModalListBudget>;

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
