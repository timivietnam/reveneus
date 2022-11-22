import React from 'react';
import {
  ImageStyle,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import UserAvatar from 'react-native-user-avatar';

export declare type UserAvatarProps = {
  name: string;
  src: string | null | undefined;
  bgColor?: string;
  bgColors?: string[];
  textColor?: string;
  size: number;
  imageStyle?: ImageStyle;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  borderRadius?: number;
  component?: Object;
};

const Avatar: React.FC<UserAvatarProps> = ({
  borderRadius = 4,
  textColor = '#FFFFFF',
  ...rest
}) => {
  const bgColors = [
    '#2ecc7199', // emerald
    '#3498db99', // peter river
    '#8e44ad99', // wisteria
    '#e67e2299', // carrot
    '#e74c3c99', // alizarin
    '#1abc9c99', // turquoise
    '#2c3e5099', // midnight blue
  ];
  return (
    <UserAvatar
      textColor={textColor}
      borderRadius={borderRadius}
      textStyle={styles.textStyle}
      {...rest}
      bgColors={bgColors}
    />
  );
};

export default Avatar;
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 24,
    fontFamily: 'AlbertSans-Bold',
    fontWeight: '700',
  },
});
