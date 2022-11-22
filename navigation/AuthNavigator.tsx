import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from 'screens/auth/Login';

import { AuthStackParamList } from './types';
import ForgotPassword from 'screens/auth/ForgotPassword';
import SignUp from 'screens/auth/SignUp';
import Verify from 'screens/auth/Verify';
import ResetPassword from 'screens/auth/ResetPassword';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigator: React.FC = React.memo(() => {
  return (
    <View style={styles.container}>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
      </Stack.Navigator>
    </View>
  );
});

export default AuthNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
