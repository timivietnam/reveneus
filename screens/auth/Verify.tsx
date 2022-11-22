import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import {
  Button,
  Icon,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { Container, Content, Text } from 'components';
import { Images } from 'assets/images';
import InputCodeOtp from './elements/InputCodeOtp';
import useCountDownUtil from 'utils/useCountDownUtil';
import { navigate } from 'navigation/RootNavigation';

const Verify = React.memo(() => {
  const { goBack } = useNavigation();
  const { t } = useTranslation(['common', 'auth']);
  const [code, setCode] = React.useState('');
  const [time, reset] = useCountDownUtil(30);

  const handleSubmit = () => {
    navigate('ResetPassword');
  };
  const handleSignUp = () => {
    navigate('SignUp');
  };
  const handleResend = () => {
    reset();
  };
  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryRight={
          <TopNavigationAction
            onPress={goBack}
            icon={<Icon pack="assets" name="xcircle" />}
          />
        }
      />
      <Content contentContainerStyle={styles.content}>
        <Image source={Images.authenticate} style={styles.image} />
        <Text category="h2" center>
          {t('auth:authenticate_account')}
        </Text>
        <Text category="s1" status="platinum" center marginBottom={24}>
          {t('auth:authenticate_describe')}
        </Text>
        <InputCodeOtp
          style={styles.enterCode}
          {...{ code, setCode }}
          codeLength={5}
          autoFocus
        />

        <Button
          children={t('common:submit')}
          onPress={handleSubmit}
          status="info"
          disabled={code.length < 5}
        />
        <TouchableOpacity style={styles.buttonResend} onPress={handleResend}>
          <Icon pack="assets" name="refresh" style={styles.iconRefresh} />
          <Text category="s2" status="platinum">
            {time == 0 ? '' : ' ' + time + 's'} {t('auth:resend_code')}
          </Text>
        </TouchableOpacity>
      </Content>
      <Button
        appearance="ghost"
        status="info"
        size="giant"
        onPress={handleSignUp}
        children={t('auth:create_an_account') + '!'}
      />
    </Container>
  );
});

export default Verify;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  enterCode: {
    marginBottom: 32,
  },
  buttonResend: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 24,
  },
  iconRefresh: {
    width: 16,
    height: 16,
  },
});
