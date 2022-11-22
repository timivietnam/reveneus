import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  Avatar,
  Button,
  Icon,
  Input,
  Layout,
  TopNavigation,
  TopNavigationAction,
  ViewPager,
} from '@ui-kitten/components';
import {
  Container,
  CurrencyInput,
  ModalConfirm,
  TabBar,
  Text,
} from 'components';
import { useAuth, useDrawer, useImagePicker, useLayout, useModal } from 'hooks';
import { useAppDispatch, useAppSelector } from 'store/store';
import { userSelector } from 'store/slices/userSlice';
import { useTranslation } from 'react-i18next';

import ChangePassword from './ChangePassword';

import { Formik } from 'formik';
import { Images } from 'assets/images';
import auth from '@react-native-firebase/auth';
import { setAppLoading } from 'store/slices/appSlice';
import {
  useUpdateUserMutation,
  NamedOperations,
  useDeleteAccountMutation,
} from 'sdk';
import { showMessage } from 'hooks/ToastService';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type FormValues = {
  avatar_url: string;
  full_name: string;
  email: string;
  description: string;
  amount_premium: string;
};

const AccountSettingsScreen = React.memo(() => {
  const dispatch = useAppDispatch();
  const { deleteAccount } = useAuth();
  const { bottom } = useLayout();
  const { openDrawer } = useDrawer();
  const { choosePhoto } = useImagePicker();
  const { modalRef, show, hide } = useModal();
  const { t } = useTranslation(['common', 'account']);
  const ref = React.useRef<KeyboardAwareScrollView>(null);
  const {
    user: {
      id,
      email,
      description,
      is_admin,
      full_name,
      avatar_url,
      amount_premium,
    },
  } = useAppSelector(userSelector);

  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  const [UpdateUser] = useUpdateUserMutation({
    refetchQueries: [NamedOperations.Query.GetMe],
  });

  const [DeleteAccount] = useDeleteAccountMutation();

  React.useEffect(() => {
    if (ref) {
      ref.current?.scrollForExtraHeightOnAndroid(120);
    }
  }, [ref]);

  const handleUpdateUser = React.useCallback(
    async (values: FormValues) => {
      try {
        dispatch(setAppLoading(true));
        const { data, errors } = await UpdateUser({
          variables: {
            id: id,
            full_name: values.full_name,
            avatar_url: values.avatar_url,
            description: values.description,
            amount_premium: parseFloat(values.amount_premium),
          },
        });

        if (data) {
          showMessage({
            type: 'success',
            text1: 'Save change success!',
          });
        } else {
          console.log('error update user', errors);
          showMessage({
            type: 'error',
            text1: 'Save change failed!',
          });
        }
      } finally {
        dispatch(setAppLoading(false));
      }
    },
    [id],
  );

  const handleDelete = React.useCallback(async () => {
    await auth().currentUser?.delete();
    const { data } = await DeleteAccount({
      variables: { id: id },
    });
    if (data) {
      hide();
      deleteAccount();
    } else {
      showMessage({
        type: 'error',
        text1: 'Can not delete account, please contact with admin',
      });
    }
  }, [id]);

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        avatar_url: avatar_url || '',
        email: email,
        full_name: full_name || '',
        description: description || '',
        amount_premium: `${amount_premium}` || '',
      }}
      onSubmit={handleUpdateUser}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        values,
        errors,
      }) => {
        return (
          <Container style={styles.container}>
            <TopNavigation
              accessoryLeft={
                <TopNavigationAction
                  icon={<Icon pack="assets" name="menu" />}
                  onPress={openDrawer}
                />
              }
            />
            <KeyboardAwareScrollView
              ref={ref}
              enableOnAndroid
              extraHeight={120}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={[{ paddingBottom: bottom + 24 }]}
            >
              <Text
                category="h2"
                status="placeholder"
                marginBottom={16}
                marginTop={8}
                marginHorizontal={16}
              >
                {t('account:account_settings')}
              </Text>
              <TabBar
                tabs={[t('account:information'), t('account:change_password')]}
                setActiveIndex={setSelectedIndex}
                activeIndex={selectedIndex}
              />
              <ViewPager
                selectedIndex={selectedIndex}
                onSelect={setSelectedIndex}
              >
                <View style={styles.content}>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() =>
                      choosePhoto((i) => {
                        if (i) {
                          setFieldValue('avatar_url', i?.base64);
                        } else {
                          setFieldValue('avatar_url', avatar_url);
                        }
                      })
                    }
                    style={styles.avatar}
                  >
                    <Avatar
                      source={{
                        uri: values.avatar_url
                          ? values.avatar_url
                          : Images.avatarDefault,
                      }}
                      size="66"
                    />
                  </TouchableOpacity>
                  <Input
                    value={values.full_name}
                    onBlur={handleBlur('full_name')}
                    status={errors.full_name ? 'danger' : 'basic'}
                    onChangeText={handleChange('full_name')}
                    placeholder={t('account:placeholder_full_name')}
                    caption={errors.full_name}
                    size="medium"
                    style={styles.inputBox}
                    returnKeyType="next"
                  />
                  <Input
                    value={values.email}
                    onBlur={handleBlur('email')}
                    status={errors.email ? 'danger' : 'basic'}
                    onChangeText={handleChange('email')}
                    placeholder={t('account:placeholder_email')}
                    caption={errors.email}
                    size="medium"
                    style={styles.inputBox}
                    keyboardType="email-address"
                    disabled
                  />
                  {is_admin && (
                    <CurrencyInput
                      value={values.amount_premium}
                      onBlur={handleBlur('amount_premium')}
                      status={errors.amount_premium ? 'danger' : 'basic'}
                      onChangeText={handleChange('amount_premium')}
                      placeholder={t('account:placeholder_amount')}
                      caption={errors.amount_premium}
                      size="medium"
                      style={styles.inputBox}
                      keyboardType="numeric"
                      returnKeyType="next"
                    />
                  )}
                  <Input
                    value={values.description}
                    onBlur={handleBlur('description')}
                    status={errors.description ? 'danger' : 'basic'}
                    onChangeText={handleChange('description')}
                    placeholder={t('account:placeholder_description')}
                    caption={errors.description}
                    size="medium"
                    style={styles.inputBox}
                    returnKeyType="done"
                  />
                  <Button
                    children={t('account:save_change')}
                    status="info"
                    style={styles.buttonSave}
                    onPress={() => handleSubmit()}
                  />
                </View>
                <ChangePassword />
              </ViewPager>
            </KeyboardAwareScrollView>
            <Layout
              style={[styles.buttonDelete, { paddingBottom: bottom + 24 }]}
            >
              <Button
                children={t('account:delete_account')}
                status="danger"
                size="medium"
                onPress={show}
              />
            </Layout>
            <ModalConfirm
              ref={modalRef}
              title={t('account:are_you_sure')}
              description={t('account:description_delete_account')}
              buttonLeft={{ onPress: hide }}
              buttonRight={{
                title: t('common:delete'),
                onPress: handleDelete,
                status: 'danger',
              }}
            />
          </Container>
        );
      }}
    </Formik>
  );
});

export default AccountSettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    alignSelf: 'flex-start',
  },
  content: {
    padding: 24,
  },
  inputBox: {
    marginTop: 24,
  },
  buttonSave: {
    marginTop: 32,
  },
  buttonDelete: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 32,
    paddingTop: 8,
  },
});
