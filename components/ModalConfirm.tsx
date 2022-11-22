import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Layout, Modal, useTheme } from '@ui-kitten/components';
import { useTranslation } from 'react-i18next';
import { useLayout } from 'hooks';

import Text from './Text';
import { EvaStatus } from '@ui-kitten/components/devsupport';

interface ModalConfirmProps {
  title: string;
  description?: string;
  buttonLeft?: {
    title?: string;
    onPress?: () => void;
    status?: EvaStatus;
  };
  buttonRight?: {
    title?: string;
    onPress?: () => void;
    status?: EvaStatus;
  };
}

function ModalConfirm(
  { title, description, buttonLeft, buttonRight }: ModalConfirmProps,
  ref: React.ForwardedRef<{ show: () => void; hide: () => void }>,
) {
  const theme = useTheme();
  const { width } = useLayout();
  const { t } = useTranslation('common');

  const modalRef = React.useRef<Modal>(null);

  React.useImperativeHandle(ref, () => ({
    show: () => {
      modalRef.current?.show();
    },
    hide: () => {
      modalRef.current?.hide();
    },
  }));

  const hide = React.useCallback(() => {
    modalRef.current?.hide();
  }, []);

  return (
    <Modal
      ref={modalRef}
      onBackdropPress={hide}
      backdropStyle={styles.container}
    >
      <Layout level="1" style={[styles.modal, { width: width - 32 * 2 }]}>
        <Text category="t4" status="placeholder" marginHorizontal={32} center>
          {title}
        </Text>
        {description && (
          <Text marginTop={16} status="platinum" center marginHorizontal={24}>
            {description}
          </Text>
        )}
        <View
          style={[
            styles.buttonView,
            { borderTopColor: theme['background-basic-color-2'] },
          ]}
        >
          <Button
            children={buttonLeft?.title || t('cancel')}
            size="small"
            onPress={buttonLeft?.onPress}
            status={buttonLeft?.status || 'info'}
            appearance="outline"
            style={styles.button1}
          />
          <Button
            children={buttonRight?.title || t('ok')}
            size="small"
            onPress={buttonRight?.onPress}
            status={buttonRight?.status || 'info'}
            style={[styles.button2]}
          />
        </View>
      </Layout>
    </Modal>
  );
}

export default React.forwardRef(ModalConfirm) as (
  props: ModalConfirmProps & {
    ref?: React.ForwardedRef<{ show: () => void; hide: () => void }>;
  },
) => ReturnType<typeof ModalConfirm>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.86)',
  },
  modal: {
    borderRadius: 12,
    paddingTop: 48,
    alignSelf: 'center',
    marginHorizontal: 16,
    paddingBottom: 24,
  },
  buttonView: {
    marginTop: 32,
    flexDirection: 'row',
    height: 48,
    borderTopWidth: 1,
    paddingHorizontal: 24,
  },
  button1: {
    flex: 1,
  },
  button2: {
    flex: 1,
    marginLeft: 12,
  },
});
