import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme, Spinner } from '@ui-kitten/components';
import { Container } from 'components';

const Loading: React.FC = () => {
  const theme = useTheme();
  return (
    <Container style={styles.container}>
      <Spinner style={{ borderColor: theme['color-info-500'] }} />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Loading;
