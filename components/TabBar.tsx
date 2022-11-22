import React from 'react';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '@ui-kitten/components';

import Text from './Text';

import keyExtractor from 'utils/keyExtractor';

interface ITabBarProps {
  tabs: Array<string>;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}
const TabBar: React.FC<ITabBarProps> = React.memo(
  ({ tabs, activeIndex, setActiveIndex }) => {
    const theme = useTheme();
    const ref = React.useRef<FlatList>(null);

    React.useEffect(() => {
      ref.current?.scrollToIndex({
        index: activeIndex,
        animated: true,
        viewPosition: 0.5,
      });
    }, [activeIndex, ref]);

    return (
      <FlatList
        data={tabs}
        ref={ref}
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={false}
        keyExtractor={keyExtractor}
        horizontal
        renderItem={({ item, index }) => {
          const isActive = index === activeIndex;
          const backgroundColor = isActive
            ? theme['color-info-500']
            : theme['background-basic-color-2'];

          return (
            <TouchableOpacity
              onPress={() => setActiveIndex(index)}
              style={[styles.button, { backgroundColor }]}
            >
              <Text
                category="s2"
                center
                status={isActive ? 'white' : 'placeholder'}
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    );
  },
);

export default TabBar;

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 16,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    borderRadius: 16,
  },
});
