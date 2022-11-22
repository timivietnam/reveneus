import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useTheme, Layout } from '@ui-kitten/components';
import { useLayout } from 'hooks';

import Text from './Text';
import Avatar from './Avatar';

import { MemberFragment } from 'sdk';

interface MemberItemProps {
  item: MemberFragment;
  onPress?(): void;
}

const MemberItem: React.FC<MemberItemProps> = ({ item, onPress }) => {
  const theme = useTheme();
  const { width } = useLayout();
  const { full_name, avatar_url, hour_rate, ProjectMembers } = item;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[
        styles.container,
        {
          width: (width - 44) / 2,
          backgroundColor: theme['background-basic-color-2'],
        },
      ]}
    >
      <Avatar
        src={avatar_url}
        name={full_name ? full_name : 'R'}
        size={56}
        style={styles.avatar}
        borderRadius={99}
      />
      <Text category="s2" center marginBottom={8} numberOfLines={2}>
        {full_name}
      </Text>
      <View>
        <Text category="p1" status="platinum" center>
          {`${ProjectMembers.length} Projects`}
        </Text>
        <Layout
          style={[
            styles.hourRate,
            { backgroundColor: theme['button-info-color'] },
          ]}
        >
          <Text status="white" category="s2">
            ${hour_rate}/h
          </Text>
        </Layout>
      </View>
    </TouchableOpacity>
  );
};

export default MemberItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    borderRadius: 8,
    padding: 24,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    alignSelf: 'center',
    marginBottom: 18,
  },
  hourRate: {
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 8,
    marginTop: 16,
  },
});
