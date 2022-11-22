import React from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './RootNavigation';
import { useAuth } from 'hooks';

import Loading from './Loading';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import OnBoardingScreen from 'screens/onboarding/OnBoardingScreen';
import NotFoundScreen from 'screens/NotFoundScreen';

import { RootStackParamList } from './types';
import { ApolloProvider } from '@apollo/client';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createApolloClient } from 'clientApollo';

enableScreens();

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppContainer = () => {
  const { isIntro, token, isInitializing, isAuthenticated } = useAuth();
  const routeNameRef = React.useRef<string | undefined>(undefined);

  const [apolloClient, setApolloClient] = React.useState<any>();

  React.useEffect(() => {
    (async () => {
      const _apolloClient = await createApolloClient(token);
      setApolloClient(_apolloClient);
    })();
  }, [token]);

  const hiddenLoading = !isInitializing;

  if (!hiddenLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() =>
        (routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name)
      }
    >
      <ApolloProvider client={apolloClient}>
        <Stack.Navigator
          initialRouteName={
            isAuthenticated ? 'Drawer' : !isIntro ? 'Onboarding' : 'Auth'
          }
          screenOptions={{ headerShown: false }}
        >
          {!isIntro && (
            <Stack.Screen name="Onboarding" component={OnBoardingScreen} />
          )}
          {isAuthenticated ? (
            <Stack.Screen name="Drawer" component={DrawerNavigator} />
          ) : (
            <Stack.Screen name="Auth" component={AuthNavigator} />
          )}
          <Stack.Screen name="NotFound" component={NotFoundScreen} />
        </Stack.Navigator>
      </ApolloProvider>
    </NavigationContainer>
  );
};

export default AppContainer;
