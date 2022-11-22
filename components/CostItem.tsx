import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon, StyleService, useStyleSheet } from '@ui-kitten/components';
import { useTranslation } from 'react-i18next';
import { useBoolean, useModal } from 'hooks';

import { CurrencyInput, HStack, ModalConfirm, Text } from 'components';
import {
  CostFragment,
  NamedOperations,
  useRemoveCostMutation,
  useUpdateCostByIdMutation,
} from 'sdk';
import numeral from 'numeral';
import { Formik } from 'formik';
import { showMessage } from 'hooks/ToastService';
import { useAppDispatch, useAppSelector } from 'store/store';
import { setAppLoading } from 'store/slices/appSlice';
import { userSelector } from 'store/slices/userSlice';

type FormikForm = {
  amount: string;
  id: string;
  user_id: string;
};

interface CostItemProps {
  item: CostFragment;
}

const CostItem = React.memo(({ item }: CostItemProps) => {
  const { name, amount } = item;
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(userSelector);
  const { t } = useTranslation(['common']);
  const [edit, { on, off }] = useBoolean(false);
  const styles = useStyleSheet(themeStyles);

  const refetchQueries = [
    NamedOperations.Query.GetUserGeneral,
    NamedOperations.Query.GetProjectDetailsById,
  ];

  const [updateCost] = useUpdateCostByIdMutation({
    variables: {
      id: '',
      amount: '',
    },
    refetchQueries,
  });

  const [removeCost, {}] = useRemoveCostMutation({
    refetchQueries,
  });

  const {
    modalRef: modalConfirmCostRef,
    show: showModalConfirmCost,
    hide: hideModalConfirmCost,
  } = useModal();

  const handleRemoveCost = React.useCallback(async () => {
    dispatch(setAppLoading(true));
    const { data: dataCost, errors: errorCost } = await removeCost({
      variables: { _id: item.id },
      refetchQueries,
    });
    if (dataCost) {
      dispatch(setAppLoading(false));
      showMessage({
        type: 'success',
        text1: `Success remove ${item.name}.`,
      });
    } else {
      console.log('error remove cost', errorCost);
      dispatch(setAppLoading(false));
      showMessage({
        type: 'error',
        text1: `Error remove ${item.name}.`,
      });
    }
  }, []);

  const handleDeleteCost = () => {
    showModalConfirmCost();
  };
  const onEditSubmit = React.useCallback(async (values: FormikForm) => {
    dispatch(setAppLoading(true));
    const { data: dataEdit, errors: errorsEdit } = await updateCost({
      variables: {
        ...values,
      },
    });
    if (dataEdit) {
      dispatch(setAppLoading(false));
      showMessage({
        type: 'success',
        text1: `Success update ${name}.`,
      });
    } else {
      dispatch(setAppLoading(false));
      showMessage({
        type: 'error',
        text1: `Error update ${name}.${errorsEdit}`,
      });
    }
  }, []);

  return (
    <View style={[styles.card, styles.costItem]}>
      <Text category="s5" status="platinum">
        {name} :
      </Text>
      <HStack itemsCenter>
        {edit ? (
          <Formik
            initialValues={{
              amount: '',
              id: item.id,
              user_id: user.id,
            }}
            onSubmit={onEditSubmit}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => {
              return (
                <CurrencyInput
                  value={values.amount}
                  onBlur={() => {
                    handleBlur('amount');
                    off();
                  }}
                  size="small"
                  status={errors.amount ? 'danger' : 'primary'}
                  onChangeText={handleChange('amount')}
                  placeholder={t('common:amount')}
                  caption={errors.amount}
                  style={styles.inputBox}
                  keyboardType="email-address"
                  returnKeyType="done"
                  onSubmitEditing={() => handleSubmit()}
                  onEndEditing={() => {
                    handleSubmit();
                    off();
                  }}
                />
              );
            }}
          </Formik>
        ) : (
          <TouchableOpacity onPress={on}>
            <Text category="s5" status="platinum" marginRight={8}>
              ${numeral(amount || 0).format('0,0.00')}
            </Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={handleDeleteCost}>
          <Icon pack="assets" name="delete" style={styles.icon16} />
        </TouchableOpacity>
      </HStack>
      <ModalConfirm
        ref={modalConfirmCostRef}
        title={t('common:delete_cost')}
        description={t('common:description_delete_cost')}
        buttonLeft={{ onPress: hideModalConfirmCost }}
        buttonRight={{
          title: t('common:delete'),
          onPress: handleRemoveCost,
        }}
      />
    </View>
  );
});

export default CostItem;

const themeStyles = StyleService.create({
  card: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'color-basic-400',
    marginBottom: 16,
  },
  costItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon16: {
    width: 16,
    height: 16,
  },
  inputBox: {
    width: 120,
    height: 36,
  },
});
