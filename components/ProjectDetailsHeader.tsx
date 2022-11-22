import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  Divider,
  Icon,
  TopNavigation,
  TopNavigationAction,
  useTheme,
} from '@ui-kitten/components';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useBoolean, useLayout, useModal } from 'hooks';
import {
  NamedOperations,
  ProjectFragment,
  StatusProject_Enum,
  useRemoveProjectMutation,
  useUpdateProjectMutation,
} from 'sdk';
import HStack from './HStack';
import Avatar from './Avatar';
import Text from './Text';
import VStack from './VStack';
import { showMessage } from 'hooks/ToastService';
import { ProjectStackParamList } from 'navigation/types';
import { useAppDispatch } from 'store/store';
import { setAppLoading } from 'store/slices/appSlice';
import ModalConfirm from './ModalConfirm';
import { useTranslation } from 'react-i18next';

interface IProjectDetailsHeaderProps {
  data: ProjectFragment;
}
interface IButtonMoreProps {
  status_id: StatusProject_Enum | 'Remove' | 'Edit';
}

const ProjectDetailsHeader = React.memo(
  ({ data }: IProjectDetailsHeaderProps) => {
    const { t } = useTranslation(['common']);
    const { goBack, navigate } =
      useNavigation<NavigationProp<ProjectStackParamList>>();
    const theme = useTheme();
    const { height, width } = useLayout();
    const [showMore, { off, toggle }] = useBoolean(false);
    const dispatch = useAppDispatch();
    const getColorStatus = (
      status_id: StatusProject_Enum | 'Remove' | 'Edit',
    ) => {
      switch (status_id) {
        case StatusProject_Enum.Bidding:
          return theme['color-success-600'];
        case StatusProject_Enum.Done:
          return theme['color-info-500'];
        case StatusProject_Enum.Failed:
          return theme['color-red-500'];
        case StatusProject_Enum.InProgress:
          return theme['text-warning-color'];
        case 'Remove':
          return theme['text-danger-color'];
        case 'Edit':
          return theme['text-primary-color'];
        default:
          return theme['text-danger-color'];
      }
    };
    const {
      modalRef: modalConfirmRef,
      show: showModalConfirm,
      hide: hideModalConfirm,
    } = useModal();

    const [updateProjectMutation, {}] = useUpdateProjectMutation({
      variables: {
        id: data?.id,
        _set: { status_id: StatusProject_Enum.Bidding },
      },
      refetchQueries: [
        NamedOperations.Query.GetUserGeneral,
        NamedOperations.Query.GetProject,
        NamedOperations.Query.GetProjectDetailsById,
      ],
    });

    const [removeProjectMutation, {}] = useRemoveProjectMutation({
      refetchQueries: [
        NamedOperations.Query.GetUserGeneral,
        NamedOperations.Query.GetProject,
        NamedOperations.Query.GetProjectDetailsById,
      ],
    });

    const onUpdateProjectMutation = React.useCallback(
      async (status_id: StatusProject_Enum) => {
        dispatch(setAppLoading(true));
        const { data: dataStatus, errors: errorsStatus } =
          await updateProjectMutation({
            variables: {
              id: data?.id,
              _set: { status_id: status_id },
            },
          });
        if (dataStatus) {
          dispatch(setAppLoading(false));
          showMessage({
            type: 'success',
            text1: 'Success change status project.',
          });
          off();
        } else {
          dispatch(setAppLoading(false));
          showMessage({
            type: 'error',
            text1: `Failed change!!! ${errorsStatus}`,
          });
          off();
        }
      },
      [],
    );

    const onEdit = () => {
      navigate('CreateEditProject', { project: data });
    };

    const ButtonMoreOption = ({ status_id }: IButtonMoreProps) => {
      return (
        <>
          <TouchableOpacity
            onPress={() => {
              off();
              if (status_id === 'Remove') {
                setTimeout(() => {
                  showModalConfirm();
                }, 100);
              } else if (status_id === 'Edit') {
                onEdit();
              } else {
                onUpdateProjectMutation(status_id);
              }
            }}
            style={[
              styles.button,
              {
                backgroundColor: getColorStatus(status_id),
              },
            ]}
          >
            <Text category="c3" status="white" uppercase>
              {status_id?.replace('_', ' ')}
            </Text>
          </TouchableOpacity>
          <Divider />
        </>
      );
    };
    const handleRemoveProject = async () => {
      const { data: dataRemove, errors: errorsRemove } =
        await removeProjectMutation({
          variables: {
            id: data.id,
          },
        });
      if (dataRemove) {
        showMessage({
          type: 'success',
          text1: `Success remove project.`,
        });
        goBack();
      } else {
        console.log('err', errorsRemove);
      }
    };
    return (
      <View style={styles.container}>
        <TopNavigation
          accessoryLeft={
            <HStack itemsCenter style={{}} justify="flex-start">
              <TopNavigationAction
                icon={() => (
                  <Icon pack="assets" name="foward" style={styles.icon} />
                )}
                onPress={goBack}
              />
              <Avatar
                borderRadius={99}
                size={24}
                name={data.name}
                src={data?.image_url}
              />
              <Text capitalize category="t2" marginLeft={8} numberOfLines={1}>
                {data?.name}
              </Text>
              {/* <VStack
                style={[
                  styles.statusLabel,
                  { backgroundColor: getColorStatus(data.status_id) },
                ]}
              >
                <Text capitalize category="c2" status="white">
                  {data.status_id.replace('_', '')}
                </Text>
              </VStack> */}
            </HStack>
          }
          accessoryRight={
            <>
              <TopNavigationAction
                icon={() => <Icon pack="assets" name="more" />}
                onPress={toggle}
              />
              {showMore && (
                <VStack mt={8}>
                  <TouchableOpacity
                    onPress={off}
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      left: -width + 52,
                      bottom: 0,
                      width: width,
                      height: height,
                    }}
                  />
                  <VStack
                    style={[
                      styles.more,
                      {
                        width: 152 * (width / 375),
                      },
                    ]}
                    level="1"
                  >
                    <ButtonMoreOption
                      status_id={StatusProject_Enum.InProgress}
                    />
                    <ButtonMoreOption status_id={StatusProject_Enum.Done} />
                    <ButtonMoreOption status_id={StatusProject_Enum.Bidding} />
                    <ButtonMoreOption status_id={StatusProject_Enum.Failed} />
                    <ButtonMoreOption status_id={'Edit'} />
                    <ButtonMoreOption status_id={'Remove'} />
                  </VStack>
                </VStack>
              )}
            </>
          }
        />
        <ModalConfirm
          ref={modalConfirmRef}
          title={t('common:delete_project')}
          description={t('common:description_delete_project')}
          buttonLeft={{ onPress: hideModalConfirm }}
          buttonRight={{
            title: t('common:delete'),
            onPress: () => {
              handleRemoveProject();
            },
          }}
        />
      </View>
    );
  },
);

export default ProjectDetailsHeader;

const styles = StyleSheet.create({
  container: {
    zIndex: 1000,
  },
  more: {
    zIndex: 100,
    position: 'absolute',
    top: 24,
    right: 20,
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
  icon: {
    width: 16,
    height: 16,
  },
  button: {
    marginVertical: 14,
    marginLeft: 20,
    paddingHorizontal: 14,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    borderRadius: 99,
  },
  statusLabel: {
    borderRadius: 99,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginLeft: 8,
  },
});
