import React from 'react';
import { TextStyle } from 'react-native';
import { Text, TextProps } from '@ui-kitten/components';

export interface MyTextProps extends TextProps {
  style?: TextStyle;
  category?:
    | 'h1'
    | 'h2'
    | 't1'
    | 't2'
    | 't3'
    | 't4'
    | 's1'
    | 's2'
    | 's3'
    | 's4'
    | 's5'
    | 'p1'
    | 'p2'
    | 'c1'
    | 'c2'
    | 'c3'
    | 'label';
  status?:
    | 'basic'
    | 'primary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'control'
    | 'white'
    | 'platinum'
    | 'placeholder'
  children?: any;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  opacity?: number;
  maxWidth?: number;
  fontSize?: number;
  lineHeight?: number;
  uppercase?: boolean;
  lowercase?: boolean;
  capitalize?: boolean;
  none?: boolean;
  left?: boolean;
  right?: boolean;
  center?: boolean;
  underline?: boolean;
  line_through?: boolean;
}

export default React.forwardRef(
  (
    {
      marginLeft,
      marginRight,
      marginTop,
      marginBottom,
      marginVertical,
      marginHorizontal,
      opacity,
      uppercase,
      lowercase,
      capitalize,
      none,
      left,
      right,
      center,
      underline,
      lineHeight,
      line_through,
      category = 's1',
      status = 'basic',
      children,
      maxWidth,
      style,
      ...rest
    }: MyTextProps,
    ref,
  ) => {
    let textAlign: 'left' | 'center' | 'right' | 'auto' | 'justify' | 'left';

    left
      ? (textAlign = 'left')
      : right
      ? (textAlign = 'right')
      : center
      ? (textAlign = 'center')
      : (textAlign = 'left');

    let textTransform: 'uppercase' | 'lowercase' | 'capitalize' | 'none';

    uppercase
      ? (textTransform = 'uppercase')
      : lowercase
      ? (textTransform = 'lowercase')
      : capitalize
      ? (textTransform = 'capitalize')
      : none
      ? (textTransform = 'none')
      : (textTransform = 'none');

    let textDecorationLine:
      | 'none'
      | 'underline'
      | 'line-through'
      | 'underline line-through';
    underline
      ? (textDecorationLine = 'underline')
      : line_through
      ? (textDecorationLine = 'line-through')
      : (textDecorationLine = 'none');

    const getLineHeight = () => {
      switch (category) {
        case 'h1':
          return 44;
        case 'h2':
          return 42;
        case 't1':
          return 38;
        case 't2':
          return 30;
        case 't3':
          return 26;
        case 't4':
          return 20;
        case 's1':
          return 24;
        case 's2':
          return 22;
        case 's3':
          return 20;
        case 's4':
          return 20;
        case 's5':
          return 20;
        case 'p1':
          return 20;
        case 'p2':
          return 20;
        case 'c1':
          return 18;
        case 'c2':
          return 16;
        case 'c3':
          return 16;
        default:
          return 24;
      }
    };

    return (
      <Text
        ref={ref as any}
        category={category}
        status={status}
        style={[
          {
            marginLeft: marginLeft,
            marginRight: marginRight,
            marginTop: marginTop,
            marginBottom: marginBottom,
            marginVertical: marginVertical,
            marginHorizontal: marginHorizontal,
            opacity: opacity,
            textAlign: textAlign,
            maxWidth: maxWidth,
            lineHeight: lineHeight ? lineHeight : getLineHeight(),
            textTransform: textTransform,
            textDecorationLine: textDecorationLine,
          },
          style,
        ]}
        {...rest}
      >
        {children}
      </Text>
    );
  },
);
