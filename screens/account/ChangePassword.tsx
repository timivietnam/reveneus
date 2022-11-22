import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Icon, Input } from '@ui-kitten/components';
import { useToast } from 'react-native-toast-notifications';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'store/store';
import { useAuth, useBoolean } from 'hooks';

import { Formik } from 'formik';
import auth from '@react-native-firebase/auth';
import { setAppLoading } from 'store/slices/appSlice';
import { changePasswordValidation } from 'utils/validationUtils';
import { showMessage } from 'hooks/ToastService';

type FormValues = {
  password: string;
  re_password: string;
};

const ChangePassword: React.FC = () => {
  const toast = useToast();
  const dispatch = useAppDispatch();
  const { logout } = useAuth();
  const { t } = useTranslation('account');
  const [showPassword, { toggle: togglePassword }] = useBoolean(true);
  const [showRePassword, { toggle: toggleRePassword }] = useBoolean(true);

  const handleChangePassword = React.useCallback(async (values: FormValues) => {
    try {
      dispatch(setAppLoading(true));
      await auth().currentUser?.updatePassword(values.password);
      showMessage({
        type: 'success',
        text1: 'Your password has been update!',
      });
      setTimeout(() => {
        logout();
      }, 1000);
    } catch (error) {
      console.log('error change password', error);
      toast.show('Change password failed', { type: 'danger' });
    } finally {
      dispatch(setAppLoading(false));
    }
  }, []);

  return (
    <Formik
      validationSchema={changePasswordValidation}
      initialValues={{ password: '', re_password: '' }}
      onSubmit={handleChangePassword}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => {
        return (
          <View style={styles.container}>
            <Input
              value={values.password}
              onBlur={handleBlur('password')}
              status={errors.password ? 'danger' : 'basic'}
              onChangeText={handleChange('password')}
              placeholder="Enter new password"
              caption={errors.password}
              size="medium"
              secureTextEntry={showPassword}
              style={styles.inputBox}
              returnKeyType="next"
              accessoryRight={
                <TouchableOpacity onPress={togglePassword}>
                  <Icon
                    name={!showPassword ? 'eye_open' : 'eye_close'}
                    pack="assets"
                  />
                </TouchableOpacity>
              }
            />
            <Input
              value={values.re_password}
              secureTextEntry={showRePassword}
              onBlur={handleBlur('re_password')}
              status={errors.re_password ? 'danger' : 'basic'}
              onChangeText={handleChange('re_password')}
              placeholder="Confirm new password"
              caption={errors.re_password}
              size="medium"
              returnKeyType="done"
              style={styles.inputBox}
              accessoryRight={
                <TouchableOpacity onPress={toggleRePassword}>
                  <Icon
                    name={!showRePassword ? 'eye_open' : 'eye_close'}
                    pack="assets"
                  />
                </TouchableOpacity>
              }
            />
            <Button
              children={t('change_password')}
              status="info"
              size="medium"
              style={styles.button}
              onPress={() => handleSubmit()}
            />
          </View>
        );
      }}
    </Formik>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },
  inputBox: {
    marginTop: 24,
  },
  button: {
    marginTop: 32,
  },
});
