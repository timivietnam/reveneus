import React from 'react';
import { View, TouchableOpacity, TextInputProps } from 'react-native';
import {
  Avatar,
  Icon,
  Input,
  StyleService,
  TopNavigation,
  TopNavigationAction,
  useStyleSheet,
} from '@ui-kitten/components';
import { userSelector } from 'store/slices/userSlice';
import { useAnimationState, MotiView } from 'moti';
import { useSelector } from 'react-redux';
import { useDrawer, useLayout } from 'hooks';

import { Images } from 'assets/images';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { DrawerStackParamList } from 'navigation/types';

interface IHeaderUserProps {
  showSearch: boolean;
  searchProps?: TextInputProps;
  onSearch?(): void;
}

const HeaderUser: React.FC<IHeaderUserProps> = ({
  showSearch,
  searchProps,
  onSearch,
}) => {
  const { openDrawer } = useDrawer();
  const { navigate } = useNavigation<NavigationProp<DrawerStackParamList>>();
  const { top } = useLayout();
  const { user } = useSelector(userSelector);
  const styles = useStyleSheet(themeStyles);
  React.useEffect(() => {
    if (!showSearch) {
      animationState.transitionTo('to');
      animationSearch.transitionTo('to');
    } else {
      animationState.transitionTo('from');
      animationSearch.transitionTo('from');
    }
  }, [showSearch]);

  const animationState = useAnimationState({
    from: {
      width: 250,
      opacity: 1,
    },
    to: {
      width: 0,
      opacity: 0,
    },
  });

  const animationSearch = useAnimationState({
    from: {
      width: 0,
      opacity: 0,
    },
    to: {
      width: 40,
      opacity: 1,
    },
  });

  return (
    <TopNavigation
      style={[styles.container, { paddingTop: top + 8 }]}
      accessoryLeft={
        <TopNavigationAction
          icon={<Icon pack="assets" name="menu" />}
          onPress={openDrawer}
        />
      }
      accessoryRight={
        <View style={styles.row}>
          <MotiView state={animationSearch} transition={{ type: 'timing' }}>
            <View style={styles.search}>
              <TopNavigationAction
                icon={<Icon pack="assets" name="search" />}
                onPress={onSearch}
              />
            </View>
          </MotiView>
          <MotiView state={animationState} transition={{ type: 'timing' }}>
            <Input
              {...searchProps}
              style={styles.input}
              accessoryLeft={() => {
                return (
                  <TouchableOpacity activeOpacity={0.7} onPress={onSearch}>
                    <Icon pack="assets" name="search" />
                  </TouchableOpacity>
                );
              }}
            />
          </MotiView>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigate('AccountSettings')}
          >
            <Avatar
              source={{
                uri: user.avatar_url ? user.avatar_url : Images.avatarDefault,
              }}
              //@ts-ignore
              style={styles.avatar}
            />
          </TouchableOpacity>
        </View>
      }
    />
  );
};
export default HeaderUser;

const themeStyles = StyleService.create({
  container: {
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 1,
    //   height: -1,
    // },
    // shadowOpacity: 0.1,
    // shadowRadius: 4.65,
    // elevation: 7,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 3,
    marginLeft: 8,
    width: 28,
    height: 28,
  },
  input: {
    width: '100%',
    borderColor: 'color-basic-500',
  },
  search: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
