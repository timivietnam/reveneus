import React from 'react';
import { ModalConfirm, Text } from 'components';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useAuth, useLayout, useModal } from 'hooks';

import DashBoard from 'screens/DashBoard';

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { DrawerStackParamList } from './types';
import { Drawer, Icon, IndexPath, MenuItem } from '@ui-kitten/components';
import { Images } from 'assets/images';
import ProjectNavigator from './ProjectNavigator';
import { useGetMeQuery } from 'sdk';
import { useAppDispatch, useAppSelector } from 'store/store';
import { setUser, userSelector } from 'store/slices/userSlice';
import TeamMember from 'screens/team-member/TeamMember';
import AccountSettingsScreen from 'screens/account/AccountSettingsScreen';

const { Navigator, Screen } = createDrawerNavigator<DrawerStackParamList>();

const DrawerNavigator: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const { top } = useLayout();
  const { logout } = useAuth();
  const { modalRef, show, hide } = useModal();
  const { navigate } = useNavigation<NavigationProp<DrawerStackParamList>>();
  const { uid } = useAppSelector(userSelector);

  const { data } = useGetMeQuery({
    variables: { uid: uid },
    fetchPolicy: 'network-only',
  });

  React.useEffect(() => {
    if (data?.User) {
      dispatch(setUser(data.User[0]));
    }
  }, [data?.User]);

  const DrawerContent = ({ state }: DrawerContentComponentProps) => {
    return (
      <Drawer
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Image source={Images.logo} style={styles.logo} />
            <Text category="t3" status="basic" marginTop={4}>
              Revenues
            </Text>
          </View>
        )}
        style={[styles.container, { paddingTop: top + 12 }]}
        selectedIndex={new IndexPath(state.index)}
      >
        <MenuItem
          style={styles.menuButton}
          title="Dashboard"
          accessoryLeft={() => (
            <Icon pack="assets" name="dashboard" style={styles.icon} />
          )}
          onPress={() => navigate('DashBoard')}
        />
        <MenuItem
          style={styles.menuButton}
          title="Project"
          accessoryLeft={() => (
            <Icon pack="assets" name="project" style={styles.icon} />
          )}
          onPress={() => navigate('Project', { screen: 'ProjectList' })}
        />
        <MenuItem
          style={styles.menuButton}
          title="Team Member"
          accessoryLeft={() => (
            <Icon pack="assets" name="person" style={styles.icon} />
          )}
          onPress={() => navigate('TeamMember')}
        />
        <MenuItem
          style={styles.menuButton}
          title="Account Settings"
          accessoryLeft={() => (
            <Icon pack="assets" name="settings" style={styles.icon} />
          )}
          onPress={() => navigate('AccountSettings')}
        />
        <MenuItem
          title="Logout"
          accessoryLeft={() => (
            <Icon pack="assets" name="settings" style={styles.icon} />
          )}
          onPress={show}
        />
        <ModalConfirm
          ref={modalRef}
          title="Logging Out"
          description="Are you sure you want to logout?"
          buttonLeft={{ onPress: hide }}
          buttonRight={{
            title: 'Logout',
            onPress: () => {
              hide();
              logout();
            },
          }}
        />
      </Drawer>
    );
  };
  return (
    <Navigator
      initialRouteName="DashBoard"
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Screen name="DashBoard" component={DashBoard} />
      <Screen name="Project" component={ProjectNavigator} />
      <Screen name="TeamMember" component={TeamMember} />
      <Screen name="AccountSettings" component={AccountSettingsScreen} />
    </Navigator>
  );
});

export default DrawerNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonClose: {
    marginHorizontal: 16,
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 10,
  },
  logo: {
    width: 24,
    height: 24,
    marginVertical: 10,
    marginRight: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    marginLeft: 20,
  },
  menuButton: {
    marginVertical: 12,
  },
});
