import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Container, Text } from 'components';
import { RootStackParamList } from 'navigation/types';
import { useNavigation } from '@react-navigation/native';

const NotFoundScreen: React.FC = () => {
  const { navigation } = useNavigation<StackScreenProps<RootStackParamList>>();

  return (
    <Container style={styles.container}>
      <Text>This screen doesn't exist.</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.replace('Drawer', { screen: 'DashBoard' })}
        style={styles.link}
      >
        <Text>Go to home screen!</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default NotFoundScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
