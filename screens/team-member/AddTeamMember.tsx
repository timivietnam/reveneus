import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { HourInput, HStack, Text } from 'components';
import {
  Avatar,
  Button,
  Icon,
  Input,
  Layout,
  Toggle,
} from '@ui-kitten/components';
import { useTranslation } from 'react-i18next';
import { useImagePicker, useLayout } from 'hooks';

import { Formik } from 'formik';
import { MemberFragment } from 'sdk';
import * as yup from 'yup';
type FormValues = {
  avatar_url: string;
  full_name: string;
  role: string;
  hour_rate: string;
  is_active: boolean;
};

const initialValues: FormValues = {
  avatar_url: '',
  full_name: '',
  role: '',
  hour_rate: '',
  is_active: false,
};

interface AddTeamMemberProps {
  member: MemberFragment | undefined;
  onSubmit?(
    value: Pick<
      MemberFragment,
      'avatar_url' | 'full_name' | 'role' | 'hour_rate' | 'is_active'
    >,
  ): void;
  listMember: MemberFragment[];
  onHide?(): void;
}

const AddTeamMember: React.FC<AddTeamMemberProps> = React.memo(
  ({ member, onSubmit, onHide, listMember }) => {
    const { width } = useLayout();
    const { choosePhoto } = useImagePicker();
    const { t } = useTranslation(['common', 'auth']);

    const roleRef = React.useRef<Input>(null);
    const hourRef = React.useRef<Input>(null);

    const _handleSubmit = React.useCallback(
      ({ avatar_url, full_name, role, hour_rate, is_active }: FormValues) => {
        onSubmit &&
          onSubmit({
            avatar_url: avatar_url,
            full_name: full_name,
            role: role,
            is_active: is_active,
            hour_rate: parseFloat(hour_rate),
          });
      },
      [],
    );
    const listNameMember =
      listMember &&
      listMember?.map((item) => {
        return item.full_name;
      });

    const addUpdateMemberValidationSchema = yup.object().shape({
      full_name: yup
        .string()
        .notOneOf([...listNameMember], `Member already exists`)
        .required(`Full name is  required`),
      hour_rate: yup.string().required(`Hour rate is required`),
    });
    return (
      <Formik
        enableReinitialize={true}
        validationSchema={addUpdateMemberValidationSchema}
        initialValues={
          member
            ? {
                avatar_url: member.avatar_url || '',
                full_name: member.full_name || '',
                role: member.role || '',
                hour_rate: member?.hour_rate ? `${member.hour_rate}` : '',
                is_active: member.is_active || false,
              }
            : initialValues
        }
        onSubmit={_handleSubmit}
      >
        {({
          handleChange,
          handleBlur,
          setFieldValue,
          handleSubmit,
          values,
          errors,
        }) => {
          return (
            <Layout
              style={[
                styles.container,
                {
                  width: width - 32,
                },
              ]}
              level="1"
            >
              <TouchableOpacity
                style={styles.avatar}
                activeOpacity={0.7}
                onPress={() =>
                  choosePhoto((i) => {
                    if (i) {
                      setFieldValue('avatar_url', i?.base64);
                    } else {
                      setFieldValue('avatar_url', values.avatar_url);
                    }
                  })
                }
              >
                <Layout style={styles.buttonUploadImg} level="4">
                  {values.avatar_url ? (
                    <Avatar size="72" source={{ uri: values.avatar_url }} />
                  ) : (
                    <Icon
                      pack="assets"
                      name={'arrow_lineup'}
                      style={styles.iconLineup}
                    />
                  )}
                </Layout>
              </TouchableOpacity>
              <Input
                value={values.full_name}
                onBlur={handleBlur('full_name')}
                status={errors.full_name ? 'danger' : 'basic'}
                onChangeText={handleChange('full_name')}
                placeholder={'Full name'}
                caption={errors.full_name}
                size="medium"
                style={styles.inputBox}
                returnKeyType="next"
                onSubmitEditing={() => roleRef.current?.focus()}
              />
              <Input
                value={values.role}
                onBlur={handleBlur('role')}
                status={errors.role ? 'danger' : 'basic'}
                onChangeText={handleChange('role')}
                placeholder={'Role'}
                caption={errors.role}
                size="medium"
                style={styles.inputBox}
                returnKeyType="next"
                onSubmitEditing={() => hourRef.current?.focus()}
              />
              <HourInput
                value={values.hour_rate}
                onBlur={handleBlur('hourRate')}
                status={errors.hour_rate ? 'danger' : 'basic'}
                onChangeText={handleChange('hour_rate')}
                placeholder={'Hour Rate'}
                caption={errors.hour_rate}
                size="medium"
                style={styles.inputBox}
                keyboardType="numeric"
                returnKeyType="done"
                onSubmitEditing={() => handleSubmit()}
              />
              <HStack itemsCenter mb={24}>
                <Text category="t4">User Active</Text>
                <Toggle
                  checked={values.is_active}
                  status="danger"
                  onChange={(e) => setFieldValue('is_active', e)}
                />
              </HStack>
              <HStack>
                <Button
                  children={t('common:cancel')}
                  size="small"
                  onPress={onHide}
                  status="info"
                  appearance="outline"
                  style={styles.button}
                />
                <Button
                  children={member ? t('common:update') : t('common:add')}
                  size="small"
                  onPress={() => handleSubmit()}
                  status="info"
                  style={styles.button1}
                />
              </HStack>
            </Layout>
          );
        }}
      </Formik>
    );
  },
);

export default AddTeamMember;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    borderRadius: 16,
  },
  buttonUploadImg: {
    borderRadius: 99,
    alignSelf: 'center',
    width: 72,
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    marginBottom: 24,
  },
  iconLineup: {
    width: 16,
    height: 16,
  },
  inputBox: {
    flex: 1,
    marginBottom: 16,
  },
  button: {
    flex: 1,
  },
  button1: {
    flex: 1,
    marginLeft: 16,
  },
});
