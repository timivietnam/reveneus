import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import {
  Button,
  Icon,
  Input,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useBoolean } from 'hooks';

import { Container, Content, Text } from 'components';
import { navigate } from 'navigation/RootNavigation';
import { Images } from 'assets/images';
import { Formik } from 'formik';
import { resetPasswordValidation } from 'utils/validationUtils';

type FormValues = {
  password: string;
  re_password: string;
};
const initialValues: FormValues = {
  re_password: '',
  password: '',
};
const ResetPassword = React.memo(() => {
  const { goBack } = useNavigation();
  const { t } = useTranslation(['common', 'auth']);

  const [secureText, { toggle }] = useBoolean(true);

  const handleSignUp = () => {
    navigate('SignUp');
  };
  return (
    <Formik
      validationSchema={resetPasswordValidation}
      initialValues={initialValues}
      onSubmit={handleSignUp}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => {
        return (
          <Container style={styles.container}>
            <TopNavigation
              accessoryLeft={
                <TopNavigationAction
                  onPress={goBack}
                  icon={<Icon pack="assets" name="arrow_left" />}
                />
              }
            />
            <Content contentContainerStyle={styles.content}>
              <Image source={Images.hand} style={styles.hand} />
              <Text category="h2" marginTop={32}>
                {t('auth:reset_password')}
              </Text>
              <Text
                category="p1"
                status="primary"
                opacity={0.7}
                marginBottom={24}
              >
                {t('auth:dont_worry_bro')}
              </Text>
              <Input
                value={values.password}
                onBlur={handleBlur('password')}
                status={errors.password ? 'danger' : 'basic'}
                onChangeText={handleChange('password')}
                placeholder={t('auth:your_password')}
                size="medium"
                caption={errors.password}
                style={styles.inputBox}
                secureTextEntry={secureText}
                returnKeyType="next"
                onSubmitEditing={() => handleSubmit()}
                accessoryRight={(props) => (
                  <TouchableOpacity onPress={toggle}>
                    <Icon
                      name={!secureText ? 'eye_open' : 'eye_close'}
                      {...props}
                      pack="assets"
                    />
                  </TouchableOpacity>
                )}
              />
              <Input
                value={values.re_password}
                onBlur={handleBlur('re_password')}
                status={errors.re_password ? 'danger' : 'basic'}
                onChangeText={handleChange('re_password')}
                placeholder={t('auth:re_password')}
                size="medium"
                style={styles.inputBox}
                caption={errors.re_password}
                secureTextEntry={secureText}
                returnKeyType="done"
                onSubmitEditing={() => handleSubmit()}
                accessoryRight={(props) => (
                  <TouchableOpacity onPress={toggle}>
                    <Icon
                      name={!secureText ? 'eye_open' : 'eye_close'}
                      {...props}
                      pack="assets"
                    />
                  </TouchableOpacity>
                )}
              />
              <Button
                children={t('auth:update_password')}
                onPress={handleSubmit}
                status="info"
                style={styles.button}
                accessoryRight={(props) => (
                  <Icon pack="assets" name="arrow_right" {...props} />
                )}
              />
            </Content>
            <Button
              appearance="ghost"
              children={t('auth:sign_up').toUpperCase() + '!'}
              status="info"
              onPress={handleSignUp}
            />
          </Container>
        );
      }}
    </Formik>
  );
});

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 32,
  },
  hand: {
    alignSelf: 'center',
  },
  inputBox: {
    marginBottom: 24,
  },
  button: {},
});
