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
  Avatar,
  Modal,
  StyleService,
  Toggle,
  useStyleSheet,
} from '@ui-kitten/components';
import { useImagePicker, useLayout } from 'hooks';
import { HourInput, HStack, Text } from 'components';
import { useTranslation } from 'react-i18next';

import { MemberFragment, NamedOperations, useAddMemberMutation } from 'sdk';
import { showMessage } from 'hooks/ToastService';
import _ from 'lodash';
import { Formik } from 'formik';
import { useAppDispatch, useAppSelector } from 'store/store';
import { setAppLoading } from 'store/slices/appSlice';
import { userSelector } from 'store/slices/userSlice';
import * as yup from 'yup';

interface IModalNewTeamMemberProps {
  listMember: MemberFragment[];
}

function ModalNewTeamMember(
  { listMember }: IModalNewTeamMemberProps,
  ref: React.ForwardedRef<{ show: () => void; hide: () => void }>,
) {
  const { width } = useLayout();
  const styles = useStyleSheet(themedStyles);
  const { t } = useTranslation(['home', 'common']);
  const modalRef = React.useRef<Modal>(null);

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
  const { choosePhoto } = useImagePicker();
  const [AddMember] = useAddMemberMutation({
    refetchQueries: [
      NamedOperations.Query.GetProjectDetailsById,
      NamedOperations.Query.GetUserGeneral,
      NamedOperations.Query.getListProjectMember,
      NamedOperations.Query.GetTeamMember,
    ],
  });
  const { user } = useAppSelector(userSelector);
  const initialValues = {
    avatar_url: '',
    full_name: '',
    role: '',
    hour_rate: '',
    is_active: false,
    user_id: user.id,
  };

  const roleRef = React.useRef<Input>(null);
  const hourRef = React.useRef<Input>(null);
  const dispatch = useAppDispatch();
  const _handleSubmit = React.useCallback(
    async (values: {
      avatar_url: string;
      full_name: string;
      role: string;
      hour_rate: string;
      user_id: string;
      is_active: boolean;
    }) => {
      dispatch(setAppLoading(true));
      const { data, errors } = await AddMember({
        variables: {
          input: { ...values },
        },
      });
      if (data) {
        dispatch(setAppLoading(false));
        showMessage({
          text1: `Add ${values.full_name} member success`,
          type: 'success',
        });
      } else {
        dispatch(setAppLoading(false));
        showMessage({
          text1: `Add ${values.full_name} member failed`,
          type: 'error',
        });
      }
    },
    [],
  );
  const listNameMember =
    listMember &&
    listMember?.map((item) => {
      return item.full_name;
    });

  const addUpdateMemberValidationSchema = yup.object().shape({
    full_name: yup
      .string()
      .notOneOf([...listNameMember], `Member already exists`)
      .required(`Full name is  required`),
    hour_rate: yup.string().required(`Hour rate is required`),
  });

  return (
    <Modal
      ref={modalRef}
      onBackdropPress={hide}
      backdropStyle={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Layout style={[styles.modal, { width: width - 32 }]} level="1">
          <Formik
            enableReinitialize={true}
            validationSchema={addUpdateMemberValidationSchema}
            initialValues={initialValues}
            onSubmit={_handleSubmit}
          >
            {({
              handleChange,
              handleBlur,
              setFieldValue,
              handleSubmit,
              values,
              errors,
            }) => {
              return (
                <Layout>
                  <TouchableOpacity
                    style={styles.avatar}
                    activeOpacity={0.7}
                    onPress={() =>
                      choosePhoto((i) => {
                        if (i) {
                          setFieldValue('avatar_url', i?.base64);
                        } else {
                          setFieldValue('avatar_url', values.avatar_url);
                        }
                      })
                    }
                  >
                    <Layout style={styles.buttonUploadImg} level="4">
                      {values.avatar_url ? (
                        <Avatar size="72" source={{ uri: values.avatar_url }} />
                      ) : (
                        <Icon
                          pack="assets"
                          name={'arrow_lineup'}
                          style={styles.iconLineup}
                        />
                      )}
                    </Layout>
                  </TouchableOpacity>
                  <Input
                    value={values.full_name}
                    onBlur={handleBlur('full_name')}
                    status={errors.full_name ? 'danger' : 'basic'}
                    onChangeText={handleChange('full_name')}
                    placeholder={'Full name'}
                    caption={errors.full_name}
                    size="medium"
                    style={styles.inputBox}
                    returnKeyType="next"
                    onSubmitEditing={() => roleRef.current?.focus()}
                  />
                  <Input
                    value={values.role}
                    onBlur={handleBlur('role')}
                    status={errors.role ? 'danger' : 'basic'}
                    onChangeText={handleChange('role')}
                    placeholder={'Role'}
                    caption={errors.role}
                    size="medium"
                    style={styles.inputBox}
                    returnKeyType="next"
                    onSubmitEditing={() => hourRef.current?.focus()}
                  />
                  <HourInput
                    value={values.hour_rate}
                    onBlur={handleBlur('hourRate')}
                    status={errors.hour_rate ? 'danger' : 'basic'}
                    onChangeText={handleChange('hour_rate')}
                    placeholder={'Hour Rate'}
                    caption={errors.hour_rate}
                    size="medium"
                    style={styles.inputBox}
                    keyboardType="numeric"
                    returnKeyType="done"
                    onSubmitEditing={() => handleSubmit()}
                  />
                  <HStack itemsCenter mb={24}>
                    <Text category="t4">User Active</Text>
                    <Toggle
                      checked={values.is_active}
                      status="danger"
                      onChange={(e) => setFieldValue('is_active', e)}
                    />
                  </HStack>
                  <HStack>
                    <Button
                      children={t('common:cancel')}
                      size="small"
                      onPress={hide}
                      status="info"
                      appearance="outline"
                      style={styles.button}
                    />
                    <Button
                      children={t('common:add')}
                      size="small"
                      onPress={() => handleSubmit()}
                      status="info"
                      style={styles.button1}
                    />
                  </HStack>
                </Layout>
              );
            }}
          </Formik>
        </Layout>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

export default React.forwardRef(ModalNewTeamMember) as (
  props: IModalNewTeamMemberProps & {
    ref?: React.ForwardedRef<{ show: () => void; hide: () => void }>;
  },
) => ReturnType<typeof ModalNewTeamMember>;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(30, 31, 32, 0.86)',
  },
  modal: {
    borderRadius: 12,
    padding: 24,
  },
  buttonUploadImg: {
    borderRadius: 99,
    alignSelf: 'center',
    width: 72,
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    marginBottom: 24,
  },
  iconLineup: {
    width: 16,
    height: 16,
  },
  inputBox: {
    flex: 1,
    marginBottom: 16,
  },
  button: {
    flex: 1,
  },
  button1: {
    flex: 1,
    marginLeft: 16,
  },
});
