import React from 'react';
import { View } from 'react-native';
import {
  useTheme,
  Layout,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';
import { useLayout } from 'hooks';

import Text from './Text';

import { IOverView } from 'constants/types';

interface OverViewItemProps {
  item: IOverView;
}

const OverViewItem: React.FC<OverViewItemProps> = React.memo(({ item }) => {
  const theme = useTheme();
  const { width } = useLayout();
  const styles = useStyleSheet(themeStyles);
  const { title, value, secondTitle, secondValue, description } = item;

  return (
    <Layout
      level="1"
      style={[
        styles.container,
        {
          borderColor: theme['color-basic-300'],
          minWidth: width - (162 + 16),
        },
      ]}
    >
      <View style={styles.titleField}>
        <Text category="c3" uppercase status="platinum">
          {title}
        </Text>
        {secondTitle && (
          <Text category="c2" uppercase>
            {secondTitle}
          </Text>
        )}
      </View>
      <View style={styles.valueField}>
        <Text uppercase category="t2">
          {value}
          {description && (
            <Text category="s2">
              {'  '}
              {description}
            </Text>
          )}
        </Text>
        {secondValue && (
          <Text status="info" uppercase marginLeft={24}>
            {secondValue}
          </Text>
        )}
      </View>
    </Layout>
  );
});

export default OverViewItem;

const themeStyles = StyleService.create({
  container: {
    padding: 16,
    marginRight: 16,
    borderRadius: 12,
    borderWidth: 1,
    minHeight: 100,
    justifyContent: 'space-between',
  },
  titleField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  valueField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
