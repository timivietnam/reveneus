import React from 'react';
import { Image, StyleSheet } from 'react-native';
import {
  Button,
  Icon,
  Input,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import { Container, Content, Text } from 'components';
import { useTranslation } from 'react-i18next';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useAuth } from 'hooks';

import { Formik } from 'formik';
import { Images } from 'assets/images';
import { AuthStackParamList } from 'navigation/types';
import { forgotPasswordValidation } from 'utils/validationUtils';

type FormValues = {
  email: string;
};
const initialValues: FormValues = {
  email: '',
};
const ForgotPassword = React.memo(() => {
  const { forgot } = useAuth();
  const { goBack, navigate } =
    useNavigation<NavigationProp<AuthStackParamList>>();
  const { t } = useTranslation(['common', 'auth']);

  const handleResetPassword = React.useCallback(({ email }: FormValues) => {
    forgot({ email });
  }, []);

  return (
    <Formik
      validationSchema={forgotPasswordValidation}
      initialValues={initialValues}
      onSubmit={handleResetPassword}
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
                {t('auth:forgot_password')}
              </Text>
              <Text category="p1" status="primary" opacity={0.7}>
                {t('auth:dont_worry_bro')}
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
                onSubmitEditing={() => handleSubmit()}
              />
              <Button
                children={t('auth:reset_password')}
                onPress={() => handleSubmit()}
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
              onPress={() => navigate('SignUp')}
            />
          </Container>
        );
      }}
    </Formik>
  );
});

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 32,
  },
  hand: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  inputBox: {
    marginVertical: 24,
  },
  button: {},
});
