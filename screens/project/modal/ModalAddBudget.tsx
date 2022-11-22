import React from 'react';
import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  Button,
  Icon,
  Input,
  Layout,
  Modal,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';
import { useLayout } from 'hooks';
import { CurrencyInput, HStack, Text } from 'components';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import {
  BudgetFragment,
  NamedOperations,
  useAddBudgetProjectMutation,
} from 'sdk';
import { showMessage } from 'hooks/ToastService';
import { useAppDispatch, useAppSelector } from 'store/store';
import { userSelector } from 'store/slices/userSlice';
import * as yup from 'yup';
import { setAppLoading } from 'store/slices/appSlice';
type FormikForm = {
  name: string;
  amount: string;
};

interface IModalAddBudgetProps {
  idProject: string;
  listBudget: BudgetFragment[];
}

function ModalAddBudget(
  { idProject, listBudget }: IModalAddBudgetProps,
  ref: React.ForwardedRef<{ show: () => void; hide: () => void }>,
) {
  const { width } = useLayout();
  const styles = useStyleSheet(themedStyles);
  const amountRef = React.useRef<Input>(null);
  const { t } = useTranslation(['home', 'common']);
  const modalRef = React.useRef<Modal>(null);

  const initialValues: FormikForm = {
    name: '',
    amount: '',
  };
  const listBudgetName = listBudget.map((item) => {
    return item.name;
  });
  const addBudgetValidationSchema = () => {
    return yup.object().shape({
      name: yup
        .string()
        .notOneOf([...listBudgetName], `Already name used.`)
        .required('Name budget is required'),
      amount: yup.string().required('Amount budget is required'),
    });
  };
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
  }, []);
  const user_id = useAppSelector(userSelector);
  const [addBudgetMutation, { data, loading, error }] =
    useAddBudgetProjectMutation({
      refetchQueries: [
        NamedOperations.Query.GetProjectDetailsById,
        NamedOperations.Query.GetUserGeneral,
      ],
    });
  const dispatch = useAppDispatch();
  const onAddCost = React.useCallback(async (values: FormikForm) => {
    dispatch(setAppLoading(true));

    const { data, errors } = await addBudgetMutation({
      variables: {
        input: {
          name: values.name,
          amount: values.amount,
          project_id: idProject,
          user_id: user_id.user.id,
        },
      },
    });
    if (data) {
      dispatch(setAppLoading(false));
      hide();
      showMessage({
        type: 'success',
        text1: `Success add ${data.insert_Budget_one?.name}.`,
      });
    } else {
      dispatch(setAppLoading(false));
      hide();
      showMessage({
        type: 'error',
        text1: `Error add ${errors}.`,
      });
    }
  }, []);
  return (
    <Modal
      ref={modalRef}
      onBackdropPress={hide}
      backdropStyle={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Formik
          validationSchema={addBudgetValidationSchema}
          initialValues={initialValues}
          onSubmit={onAddCost}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => {
            return (
              <Layout style={[styles.modal, { width: width - 32 }]}>
                <HStack itemsCenter mb={32}>
                  <Text category="h2" status="platinum">
                    {t('home:add_budget')}
                  </Text>
                  <TouchableOpacity onPress={hide}>
                    <Icon
                      pack="assets"
                      name="delete"
                      style={styles.iconClose}
                    />
                  </TouchableOpacity>
                </HStack>
                <Input
                  value={values.name}
                  onBlur={handleBlur('name')}
                  status={errors.name ? 'danger' : 'primary'}
                  onChangeText={handleChange('name')}
                  placeholder={t('common:name')}
                  caption={errors.name}
                  size="small"
                  style={styles.inputBox}
                  keyboardType="email-address"
                  returnKeyType="next"
                  onSubmitEditing={() => amountRef.current?.focus()}
                />
                <CurrencyInput
                  ref={amountRef}
                  value={values.amount}
                  onBlur={handleBlur('amount')}
                  size="small"
                  status={errors.amount ? 'danger' : 'primary'}
                  onChangeText={handleChange('amount')}
                  placeholder={t('common:amount')}
                  caption={errors.amount}
                  style={styles.inputBox}
                  keyboardType="email-address"
                  returnKeyType="done"
                />
                <Button
                  children={t('common:add')}
                  onPress={() => handleSubmit()}
                  style={styles.add}
                />
              </Layout>
            );
          }}
        </Formik>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

export default React.forwardRef(ModalAddBudget) as (
  props: IModalAddBudgetProps & {
    ref?: React.ForwardedRef<{ show: () => void; hide: () => void }>;
  },
) => ReturnType<typeof ModalAddBudget>;

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
    marginBottom: 24,
  },
  add: {
    alignSelf: 'flex-end',
    width: '40%',
  },
});
