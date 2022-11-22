import React from 'react';
import {View} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

const Pagination: React.FC<{
  index: number;
  backgroundColor: string;
  length: number;
  spacing?: number;
  animValue: Animated.SharedValue<number>;
  isRotate?: boolean;
  size?: number;
}> = props => {
  const {animValue, index, length, backgroundColor, isRotate, spacing,size=8} = props;

  const animStyle = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [-size, 0, size];

    if (index === 0 && animValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1];
      outputRange = [-size, 0, size];
    }

    return {
      transform: [
        {
          translateX: interpolate(
            animValue.value,
            inputRange,
            outputRange,
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  }, [animValue, index, length]);
  return (
    <View
      style={{
        backgroundColor: '#E4E7EB',
        width: size,
        height: size,
        borderRadius: 50,
        overflow: 'hidden',
        marginHorizontal: spacing ? spacing / 2 : 6,
        transform: [
          {
            rotateZ: isRotate ? '90deg' : '0deg',
          },
        ],
      }}>
      <Animated.View
        style={[
          {
            borderRadius: 50,
            backgroundColor,
            flex: 1,
          },
          animStyle,
        ]}
      />
    </View>
  );
};
export default Pagination;
