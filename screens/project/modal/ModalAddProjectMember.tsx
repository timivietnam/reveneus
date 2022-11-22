import React from 'react';
import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  Button,
  Icon,
  Layout,
  Modal,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';
import { useBoolean, useLayout } from 'hooks';
import { Content, HStack, Text, VStack, Avatar } from 'components';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { addProjectMemberValidationSchema } from 'utils/validationUtils';
import {
  MemberFragment,
  useAddProjectMemberMutation,
  NamedOperations,
} from 'sdk';
import HourInput from 'components/HourInput';
import { isEmpty } from 'lodash';
import { useAppDispatch, useAppSelector } from 'store/store';
import { userSelector } from 'store/slices/userSlice';
import { setAppLoading } from 'store/slices/appSlice';
import { showMessage } from 'hooks/ToastService';

type FormikForm = {
  user_id: string;
  project_id: string;
  member_id: string;
  hour_rate: string;
  hour_working: string;
};

interface IModalAddMemberProjectProps {
  idProject: string;
  listMember: MemberFragment[];
  onAddNewMember?(): void;
}

function ModalAddMemberProject(
  { idProject, listMember, onAddNewMember }: IModalAddMemberProjectProps,
  ref: React.ForwardedRef<{ show: () => void; hide: () => void }>,
) {
  const { width, height } = useLayout();
  const styles = useStyleSheet(themedStyles);
  const { t } = useTranslation(['home', 'common']);
  const modalRef = React.useRef<Modal>(null);
  const [isShow, { off: offShow, toggle }] = useBoolean(false);
  const [visible, { on, off }] = useBoolean(false);
  const user_id = useAppSelector(userSelector).user.id;

  const [selectedMember, setSelectedMember] = React.useState<MemberFragment>(
    listMember[0],
  );

  React.useEffect(() => {
    setSelectedMember(listMember[0]);
  }, [listMember[0]]);

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
    off();
    offShow();
  }, []);

  const [AddProjectMember] = useAddProjectMemberMutation({
    variables: {
      user_id: user_id,
      project_id: '',
      hour_working: 0,
      member_id: '',
      hour_rate: 0,
    },
    refetchQueries: [
      NamedOperations.Query.getListProjectMember,
      NamedOperations.Query.GetUserGeneral,
    ],
  });
  const ProjectMemberItem = React.useCallback(
    ({ item }: { item: MemberFragment }) => {
      return (
        <HStack
          itemsCenter
          mv={6}
          pv={6}
          onPress={() => {
            setSelectedMember(item);
            offShow();
          }}
        >
          <HStack itemsCenter>
            <Avatar
              size={40}
              src={item.avatar_url}
              name={item.full_name}
              borderRadius={99}
              // @ts-ignore
              imageStyle={styles.avatar}
              style={styles.avatar}
            />
            <VStack ml={8}>
              <Text category="t4">{item.full_name}</Text>
              <Text category="c2" status="warning">
                ${item.hour_rate}/h
              </Text>
            </VStack>
          </HStack>
        </HStack>
      );
    },
    [],
  );
  const dispatch = useAppDispatch();
  const _onSubmit = React.useCallback(async (values: FormikForm) => {
    dispatch(setAppLoading(true));
    hide();
    const { data, errors } = await AddProjectMember({
      variables: {
        ...values,
      },
    });
    if (data) {
      dispatch(setAppLoading(false));
      showMessage({
        type: 'success',
        text1: `Success add ${data.insert_ProjectMember_one?.Member.full_name}.`,
      });
    } else {
      dispatch(setAppLoading(false));
      showMessage({
        type: 'error',
        text1: `Error add ${errors}.`,
      });
    }
  }, []);

  return (
    <Modal
      ref={modalRef}
      visible={visible}
      onBackdropPress={hide}
      backdropStyle={styles.container}
    >
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        style={styles.container}
      >
        <Layout
          style={[styles.modal, { width: width - 32, maxHeight: height / 1.5 }]}
        >
          <HStack itemsCenter mb={32}>
            <Text category="h2" status="platinum">
              {t('home:add_members')}
            </Text>
            <TouchableOpacity onPress={hide}>
              <Icon pack="assets" name="delete" style={styles.iconClose} />
            </TouchableOpacity>
          </HStack>
          <Content>
            <View
              style={{ flex: 1, flexGrow: 1 }}
              onStartShouldSetResponder={() => true}
            >
              {isEmpty(listMember) ? (
                <>
                  <Text category="s2" marginTop={16} center status="basic">
                    Click button below to add new member.
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={onAddNewMember}
                    style={[styles.buttonAddMember]}
                  >
                    <Text category="s1" status="platinum">
                      ✛ Add New Member
                    </Text>
                  </TouchableOpacity>
                </>
              ) : (
                <VStack>
                  <HStack>
                    {selectedMember && (
                      <ProjectMemberItem item={selectedMember} />
                    )}
                    <TouchableOpacity
                      onPress={() => {
                        toggle();
                        on();
                      }}
                    >
                      <Icon
                        pack="assets"
                        name={'arrowDown'}
                        style={[styles.arrowDown, isShow && styles.arrowUp]}
                      />
                    </TouchableOpacity>
                  </HStack>
                  {listMember?.map((item, i) => {
                    if (
                      selectedMember &&
                      item.id !== selectedMember.id &&
                      isShow
                    ) {
                      return <ProjectMemberItem key={i} item={item} />;
                    }
                  })}
                </VStack>
              )}
            </View>
          </Content>
          {!isEmpty(listMember) && (
            <Formik
              validationSchema={addProjectMemberValidationSchema}
              initialValues={{
                user_id: user_id,
                project_id: idProject,
                member_id: selectedMember?.id,
                hour_rate: selectedMember?.hour_rate,
                hour_working: '',
              }}
              onSubmit={_onSubmit}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors }) => {
                return (
                  <>
                    <HourInput
                      value={`${values.hour_working}`}
                      label={t('home:time_in_project')}
                      onBlur={handleBlur('hour_working')}
                      size="small"
                      status={errors.hour_working ? 'danger' : 'primary'}
                      onChangeText={handleChange('hour_working')}
                      placeholder={t('common:amount')}
                      caption={errors.hour_working}
                      style={styles.inputBox}
                      keyboardType="numeric"
                      returnKeyType="done"
                    />
                    <HStack>
                      <Button
                        children={t('common:cancel')}
                        onPress={hide}
                        size="small"
                        status="info"
                        appearance="outline"
                        style={styles.button}
                      />
                      <Button
                        children={t('common:update')}
                        onPress={() => handleSubmit()}
                        style={[styles.update, styles.button]}
                        size="small"
                        status="info"
                      />
                    </HStack>
                  </>
                );
              }}
            </Formik>
          )}
        </Layout>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

export default React.forwardRef(ModalAddMemberProject) as (
  props: IModalAddMemberProjectProps & {
    ref?: React.ForwardedRef<{ show: () => void; hide: () => void }>;
  },
) => ReturnType<typeof ModalAddMemberProject>;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(30, 31, 32, 0.86)',
  },
  modal: {
    padding: 24,
    borderRadius: 12,
  },
  iconClose: {
    tintColor: 'text-basic-color',
    width: 24,
    height: 24,
  },
  inputBox: {
    marginBottom: 24,
  },
  update: {
    marginLeft: 24,
  },
  button: {
    flex: 1,
  },
  avatar: {
    width: 40,
    height: 40,
  },
  arrowDown: {
    width: 16,
    height: 16,
    marginTop: 12,
  },
  arrowUp: {
    transform: [{ rotateZ: '180deg' }],
  },
  buttonAddMember: {
    borderWidth: 1,
    borderRadius: 12,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 24,
    borderColor: 'color-basic-500',
  },
});
