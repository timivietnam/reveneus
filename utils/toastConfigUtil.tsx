import { useTheme } from '@ui-kitten/components';
import * as React from 'react';
import Toast, {
  BaseToast,
  ErrorToast,
  ToastConfig,
} from 'react-native-toast-message';

const toastConfig: ToastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: '#2BB596' }}
      contentContainerStyle={{ paddingHorizontal: 12 }}
      text1Style={{
        fontSize: 16,
        lineHeight: 20,
        fontFamily: 'AlbertSans-Bold',
        color: '#4C4C66',
        fontWeight: '700',
      }}
      text2Style={{
        fontSize: 12,
        lineHeight: 20,
        fontFamily: 'AlbertSans-SemiBold',
        color: '#6F6C99',
        fontWeight: '700',
      }}
    />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: '#E3507A' }}
      contentContainerStyle={{ paddingHorizontal: 12 }}
      text1Style={{
        fontSize: 16,
        lineHeight: 20,
        fontFamily: 'AlbertSans-Bold',
        color: '#4C4C66',
        fontWeight: '700',
      }}
      text2Style={{
        fontSize: 12,
        lineHeight: 20,
        fontFamily: 'AlbertSans-SemiBold',
        color: '#6F6C99',
        fontWeight: '600',
      }}
    />
  ),
};
export default toastConfig;
