import React from 'react';
import { Container, Content, Text } from 'components';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Icon, Input, Layout } from '@ui-kitten/components';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useAuth, useBoolean } from 'hooks';

import { Formik } from 'formik';
import { Images } from 'assets/images';
import { AuthStackParamList } from 'navigation/types';
import { loginValidationSchema } from 'utils/validationUtils';

type FormValues = {
  email: string;
  password: string;
};
const initialValues: FormValues = {
  email: '',
  password: '',
};
const LoginScreen = React.memo(() => {
  const { login } = useAuth();
  const { t } = useTranslation(['common', 'auth']);
  const passwordRef = React.useRef<Input>(null);
  const { navigate } = useNavigation<NavigationProp<AuthStackParamList>>();

  const [secureText, { toggle }] = useBoolean(true);

  const handleLogin = React.useCallback(({ email, password }: FormValues) => {
    login({ email, password });
  }, []);

  return (
    <Formik
      validationSchema={loginValidationSchema}
      initialValues={initialValues}
      onSubmit={handleLogin}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => {
        return (
          <Container style={styles.container}>
            <Content contentContainerStyle={styles.content}>
              <View style={styles.topField}>
                <Image source={Images.logo} style={styles.logo} />
                <Text center marginTop={16} marginBottom={40}>
                  {t('auth:welcome_back')}
                </Text>
              </View>
              <Input
                value={values.email}
                onBlur={handleBlur('email')}
                status={errors.email ? 'danger' : 'basic'}
                onChangeText={handleChange('email')}
                placeholder={t('auth:your_mail')}
                caption={errors.email}
                size="medium"
                style={styles.inputBox}
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.current?.focus()}
              />
              <Input
                ref={passwordRef}
                value={values.password}
                onBlur={handleBlur('password')}
                status={errors.password ? 'danger' : 'basic'}
                onChangeText={handleChange('password')}
                placeholder={t('auth:your_password')}
                size="medium"
                caption={errors.password}
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
                children={t('auth:sign_in')}
                onPress={handleSubmit}
                status="info"
                style={styles.button}
                accessoryRight={(props) => (
                  <Icon pack="assets" name="arrow_right" {...props} />
                )}
              />
              {/* <Button
                children={t('auth:log_in_faceid')}
                onPress={handleSubmit}
                status="info"
                appearance="ghost"
                style={styles.ghostbutton}
                accessoryLeft={(props) => (
                  <Icon pack="assets" name="smiley" {...props} />
                )}
              /> */}
              {/* <Button
                children={t('auth:fb_login')}
                // onPress={handleSubmit}
                status="primary"
                accessoryLeft={(props) => (
                  <Icon pack="assets" name="fb" {...props} />
                )}
              /> */}
              {/* <Button
                children={t('auth:gg_login')}
                // onPress={handleSubmit}
                status="danger"
                style={styles.button}
                accessoryLeft={(props) => (
                  <Icon pack="assets" name="gg" {...props} />
                )}
              /> */}
            </Content>
            <Layout style={styles.bottom}>
              <Text category="s2" onPress={() => navigate('ForgotPassword')}>
                {t('auth:forgot_password') + '?'}
              </Text>
              <Text
                category="s2"
                status="info"
                onPress={() => navigate('SignUp')}
                uppercase
              >
                {t('auth:sign_up') + '!'}
              </Text>
            </Layout>
          </Container>
        );
      }}
    </Formik>
  );
});

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 32,
    paddingTop: 32,
  },
  topField: {
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
  },
  inputBox: {
    marginBottom: 16,
  },
  button: {
    marginTop: 24,
  },
  bottom: {
    marginVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 32,
  },
  ghostbutton: {
    marginVertical: 12,
  },
});
