import React from 'react';
import dayjs from 'dayjs';
import _ from 'lodash';
import numeral from 'numeral';
import {
  View,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {
  Icon,
  StyleService,
  useStyleSheet,
  useTheme,
} from '@ui-kitten/components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useModal } from 'hooks';

import { Avatar, Container, ProgressBar, Text } from 'components';
import { ProjectDetailsRouteProp } from 'navigation/types';
import {
  StatusProject_Enum,
  useGetProjectDetailsByIdQuery,
  useGetListProjectMemberQuery,
} from 'sdk';
import HStack from 'components/HStack';
import ProjectDetailsHeader from 'components/ProjectDetailsHeader';
import ModalAddCost from './modal/ModalAddCost';
import ModalAddBudget from './modal/ModalAddBudget';
import ModalListBudget from './modal/ModalListBudget';
import ModalAddProjectMember from './modal/ModalAddProjectMember';
import { useAppDispatch, useAppSelector } from 'store/store';
import { userSelector } from 'store/slices/userSlice';
import CostItem from 'components/CostItem';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ModalNewTeamMember from './modal/ModalNewTeamMember';
import ModalListProjectMember from './modal/ModalListProjectMember';
import { formatBasic } from 'utils/formatNumber';

const ProjectDetails = React.memo(() => {
  const theme = useTheme();
  const styles = useStyleSheet(themeStyles);
  const { t } = useTranslation(['common', 'home']);
  const { id } = useRoute<ProjectDetailsRouteProp>().params;
  const user = useAppSelector(userSelector);
  const dispatch = useAppDispatch();
  const { goBack } = useNavigation();

  const { data, error, refetch, loading } = useGetProjectDetailsByIdQuery({
    variables: { uuid: id, user_id: user.user.id },
    fetchPolicy: 'network-only',
  });
  const { data: data_project_members } = useGetListProjectMemberQuery({
    variables: { project_id: id },
  });

  const dataProjectMembers = data_project_members?.ProjectMember;
  const dataTeamMembers = data?.all_members;
  const listMember = dataTeamMembers?.map((item) => {
    return {
      ...item,
      Member: { id: item.id },
    };
  });
  //@ts-ignore
  const list = _.differenceBy(listMember, dataProjectMembers, 'Member.id');

  const dataProject = data?.Project[0];
  const listBudget = dataProject?.Budgets;

  const formatDate = 'DD/MM/YYYY';
  const currentDate = dayjs();
  const diffCurrent = currentDate.diff(dataProject?.start_date, 'day');
  const diffEstDate =
    dayjs(dataProject?.end_date).diff(dataProject?.start_date, 'day') + 1;
  let value = 0;
  const ratio = Number(((diffCurrent / diffEstDate) * 100).toFixed(2));
  if (diffCurrent > 0) {
    value = ratio > 100 ? 100 : ratio;
  }
  const getColorStatus = () => {
    switch (dataProject?.status_id) {
      case StatusProject_Enum.Bidding:
        return theme['color-success-600'];
      case StatusProject_Enum.Done:
        return theme['color-info-500'];
      case StatusProject_Enum.Failed:
        return theme['color-danger-500'];
      case StatusProject_Enum.InProgress:
        return theme['text-warning-color'];
        break;

      default:
        return theme['text-warning-color'];
    }
  };

  const { modalRef: modalAddCostRef, show: showModalAddCost } = useModal();
  const { modalRef: modalAddBudgetRef, show: showModalAddBudget } = useModal();

  const {
    modalRef: modalListBudgetRef,
    show: showModalListBudget,
    hide: hideModalListBudget,
  } = useModal();

  const {
    modalRef: modalListMemberRef,
    show: showModalListMember,
    hide: hideModalListMember,
  } = useModal();

  const {
    modalRef: modalNewProjectMemberRef,
    show: showModalNewProjectMember,
    hide: hideModalNewProjectMember,
  } = useModal();

  const {
    modalRef: modalNewTeamMemberRef,
    show: showModalNewTeamMember,
    hide: hideModalNewTeamMember,
  } = useModal();

  const _onDetailsBudget = () => {
    showModalListBudget();
  };
  const _onAddBudget = () => {
    showModalAddBudget();
  };
  const _onAddCost = () => {
    showModalAddCost();
  };
  const _onAddProjectMember = () => {
    showModalNewProjectMember();
  };
  const totalCost =
    _.sumBy(dataProject?.Costs, (item) => item.amount) +
    _.sumBy(dataProjectMembers, (item) => {
      return item.hour_working * item.Member.hour_rate;
    });
  const memberCost = _.sumBy(dataProjectMembers, (item) => {
    return item.hour_working * item.Member.hour_rate;
  });
  const totalBudget = _.sumBy(dataProject?.Budgets, (item) => item.amount);
  const profit = totalBudget - totalCost;

  return (
    <>
      {dataProject ? (
        <Container style={styles.container}>
          <>
            <ProjectDetailsHeader data={dataProject} />
            <KeyboardAwareScrollView
              contentContainerStyle={styles.content}
              refreshControl={
                <RefreshControl
                  refreshing={loading}
                  onRefresh={() => {
                    refetch();
                  }}
                />
              }
            >
              {/*----- Profit Card Start -----*/}
              <View
                style={[
                  styles.profit,
                  { backgroundColor: theme['color-danger-500'] },
                ]}
              >
                <Text uppercase category="c3" status="white">
                  {'Profit Project'}
                </Text>
                <Text uppercase category="h2" status="white" marginTop={16}>
                  {formatBasic(profit.toFixed(2), '$', profit > 0)}
                </Text>
              </View>
              {/*----- Profit Card End -----*/}

              {/*----- Upcoming Calendar Card Start version 2 -----*/}
              {/* <View style={[styles.card]}>
              <Text category="s5">Upcoming Calendar</Text>
            </View> */}
              {/*----- Upcoming Calendar Card End -----*/}

              {/*----- Progress Card Start -----*/}
              <View style={styles.card}>
                <HStack mb={8}>
                  <Text category="s5" capitalize>
                    {/* @ts-ignore */}
                    {dataProject?.status_id.replace('_', '')}
                  </Text>
                  <Text category="s5" style={{ color: getColorStatus() }}>
                    {value}%
                  </Text>
                </HStack>
                <ProgressBar
                  progress={value / 100}
                  progressColor={theme['text-warning-color']}
                />
                <HStack mt={8}>
                  <Text category="c1" status="platinum">
                    {dayjs(dataProject.start_date).format(formatDate)}
                  </Text>
                  <Text category="c1" status="platinum">
                    {dayjs(dataProject.end_date).format(formatDate)}
                  </Text>
                </HStack>
                <HStack mt={16}>
                  <Text category="c2" status="platinum">
                    EST COst:{' '}
                    <Text category="c2">
                      ${numeral(dataProject.cost || 0).format('0,0.00')}
                    </Text>
                    {'/'}${numeral(dataProject.budget || 0).format('0,0.00')}
                  </Text>
                </HStack>
              </View>
              {/*----- Progress Card End -----*/}

              {/*----- Budget Start -----*/}
              <HStack itemsCenter style={styles.budget}>
                <HStack justify="flex-start" itemsCenter>
                  <Text category="t4" marginRight={8} uppercase>
                    {t('home:budget')}:{' '}
                  </Text>
                  <Text category="s1" marginRight={12}>
                    ${numeral(totalBudget || 0).format('0,0.00')}
                  </Text>
                  <TouchableOpacity onPress={_onAddBudget}>
                    <Icon pack="assets" name="plus" style={styles.iconPlus} />
                  </TouchableOpacity>
                </HStack>
                <HStack onPress={_onDetailsBudget} pv={20} pl={20}>
                  <Icon pack="assets" name="backward" style={styles.icon16} />
                </HStack>
              </HStack>
              {/*----- Budget End -----*/}

              {/*----- Cost Start -----*/}

              <HStack itemsCenter mt={16} mb={12}>
                <HStack itemsCenter justify="flex-start">
                  <Text category="t4" uppercase>
                    {t('home:cost')}:
                  </Text>
                  <Text category="s1" marginLeft={8}>
                    -${numeral(totalCost || 0).format('0,0.00')}
                  </Text>
                </HStack>
                <Icon
                  pack="assets"
                  name="backward"
                  style={{
                    ...styles.icon16,
                    transform: [{ rotateZ: '90deg' }],
                  }}
                />
              </HStack>
              <View style={styles.card}>
                <HStack>
                  <Text category="s5" status="platinum" marginBottom={8}>
                    {t('home:members')}:
                  </Text>
                  <HStack
                    itemsCenter
                    justify="flex-start"
                    onPress={showModalListMember}
                  >
                    <Text category="s5" status="platinum">
                      ${numeral(memberCost || 0).format('0,0.00')}
                    </Text>
                    <Icon pack="assets" name="backward" style={styles.icon12} />
                  </HStack>
                </HStack>
                <HStack justify="flex-start">
                  {dataProjectMembers &&
                    dataProjectMembers.map((item, i) => {
                      return (
                        <Avatar
                          key={i}
                          borderRadius={99}
                          style={{ marginRight: 4 }}
                          src={item.Member.avatar_url}
                          size={24}
                          name={item.Member.full_name}
                        />
                      );
                    })}
                  <TouchableOpacity onPress={_onAddProjectMember}>
                    <Icon pack="assets" name="plus" />
                  </TouchableOpacity>
                </HStack>
              </View>
              {dataProject.Costs &&
                dataProject.Costs.map((item, i) => {
                  return <CostItem key={i} item={item} />;
                })}
              <TouchableOpacity
                style={styles.buttonAddCost}
                onPress={_onAddCost}
              >
                <Text category="s1" status="platinum">
                  + {t('home:add_cost')}
                </Text>
              </TouchableOpacity>
              {/*----- Cost End -----*/}
            </KeyboardAwareScrollView>
            <ModalAddCost
              ref={modalAddCostRef}
              idProject={dataProject?.id}
              listCost={dataProject.Costs}
            />
            <ModalAddBudget
              ref={modalAddBudgetRef}
              idProject={dataProject?.id}
              listBudget={listBudget || []}
            />
            <ModalListBudget
              ref={modalListBudgetRef}
              listBudget={listBudget}
              _onAddBudget={() => {
                hideModalListBudget();
                showModalAddBudget();
              }}
            />
            {dataProjectMembers && (
              <ModalListProjectMember
                ref={modalListMemberRef}
                listProjectMember={dataProjectMembers}
                onAddProjectMember={() => {
                  hideModalListMember();
                  showModalNewProjectMember();
                }}
              />
            )}
            <ModalAddProjectMember
              ref={modalNewProjectMemberRef}
              idProject={dataProject?.id}
              listMember={list}
              onAddNewMember={() => {
                hideModalNewProjectMember();
                showModalNewTeamMember();
              }}
            />
            <ModalNewTeamMember
              ref={modalNewTeamMemberRef}
              listMember={listMember || []}
            />
          </>
        </Container>
      ) : (
        <View style={styles.overlay}>
          <ActivityIndicator color={theme['color-info-500']} size={'large'} />
        </View>
      )}
    </>
  );
});

export default ProjectDetails;

const themeStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: 16,
    flexGrow: 1,
  },
  profit: {
    borderRadius: 12,
    padding: 20,
    paddingBottom: 8,
    marginBottom: 16,
  },

  budget: {
    borderBottomWidth: 1,
    borderColor: 'color-basic-400',
  },
  icon12: {
    width: 12,
    height: 12,
  },
  icon16: {
    width: 16,
    height: 16,
  },
  iconPlus: {
    width: 20,
    height: 20,
  },

  buttonAddCost: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'color-basic-400',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
  },
  overlay: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    justifyContent: 'center',
  },
  card: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'color-basic-400',
    marginBottom: 16,
  },
});
