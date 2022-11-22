import React from 'react';
import { Container, Content, Text } from 'components';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Icon, Input } from '@ui-kitten/components';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useAuth, useBoolean } from 'hooks';

import { Formik } from 'formik';
import { Images } from 'assets/images';
import { AuthStackParamList } from 'navigation/types';
import { registerValidationSchema } from 'utils/validationUtils';

type FormValues = {
  email: string;
  password: string;
  re_password: string;
};
const initialValues: FormValues = {
  email: '',
  re_password: '',
  password: '',
};
const SignUp = React.memo(() => {
  const { register } = useAuth();
  const { t } = useTranslation(['common', 'auth']);
  const passwordRef = React.useRef<Input>(null);
  const rePasswordRef = React.useRef<Input>(null);
  const { navigate } = useNavigation<NavigationProp<AuthStackParamList>>();
  const [secureText, { toggle }] = useBoolean(true);

  const handleSignUp = React.useCallback(({ email, password }: FormValues) => {
    register({ email, password });
  }, []);

  return (
    <Formik
      validationSchema={registerValidationSchema}
      initialValues={initialValues}
      onSubmit={handleSignUp}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => {
        return (
          <Container style={styles.container}>
            <Content contentContainerStyle={styles.content}>
              <Image source={Images.logo} style={styles.logo} />
              <Text category="h2">{t('auth:sign_up_to') + ' Revenues'}</Text>
              <Text
                category="s3"
                status="platinum"
                opacity={0.7}
                marginBottom={20}
              >
                {t('auth:make_manage_easy')}
              </Text>
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
                style={styles.inputBox}
                secureTextEntry={secureText}
                returnKeyType="next"
                onSubmitEditing={() => rePasswordRef.current?.focus()}
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
                ref={rePasswordRef}
                value={values.re_password}
                onBlur={handleBlur('re_password')}
                status={errors.re_password ? 'danger' : 'basic'}
                onChangeText={handleChange('re_password')}
                placeholder={t('auth:re_password')}
                size="medium"
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
                children={t('auth:sign_up')}
                onPress={() => handleSubmit()}
                status="info"
                style={styles.button}
                accessoryRight={(props) => (
                  <Icon pack="assets" name="arrow_right" {...props} />
                )}
              />
              {/* <Text center category="s1" status="platinum" marginTop={24}>
                {t('auth:or_signup_with')}
              </Text> */}
              {/* <Button
                children={t('auth:fb_login')}
                // onPress={handleSubmit}
                status="primary"
                style={styles.button}
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
            <Button
              appearance="ghost"
              status="info"
              onPress={() => navigate('Login')}
              children={t('auth:sign_in').toUpperCase() + '!'}
            />
          </Container>
        );
      }}
    </Formik>
  );
});

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingTop: 32,
    paddingHorizontal: 32,
  },
  inputBox: {
    marginBottom: 16,
  },
  logo: {
    width: 40,
    height: 40,
    alignSelf: 'center',
    marginBottom: 24,
  },
  button: {
    marginTop: 24,
  },
});
