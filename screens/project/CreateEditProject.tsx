import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Container, CurrencyInput, Text } from 'components';
import {
  Avatar,
  Button,
  I18nConfig,
  Icon,
  Input,
  Layout,
  NativeDateService,
  StyleService,
  TopNavigation,
  TopNavigationAction,
  useStyleSheet,
} from '@ui-kitten/components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { userSelector } from 'store/slices/userSlice';
import { useImagePicker, useLayout } from 'hooks';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'store/store';
import * as yup from 'yup';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import {
  NamedOperations,
  useAddProjectMutation,
  useGetProjectQuery,
  useUpdateProjectMutation,
} from 'sdk';
import dayjs from 'dayjs';
import { ErrorMessage, Formik } from 'formik';
import { Images } from 'assets/images';
import { EMode } from 'constants/types';
import { showMessage } from 'hooks/ToastService';
import { CreateEditProjectRouteProp } from 'navigation/types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { setAppLoading } from 'store/slices/appSlice';
// @ts-ignore
import DateRangePicker from 'lib/CalendarRange';
type FormValues = {
  image_url: string | null;
  name: string;
  budget: string;
  cost: string;
  user_id: string;
  timeline?: {
    startDate?: Date;
    endDate?: Date;
  };
};

const CreateEditProject = React.memo(() => {
  const dispatch = useAppDispatch();
  const { goBack } = useNavigation();
  const { width, bottom } = useLayout();
  const { t } = useTranslation(['calendar', 'common', 'home']);
  const styles = useStyleSheet(themedStyles);
  const ref = React.useRef<KeyboardAwareScrollView>(null);
  const bottomSheetRef = React.useRef<BottomSheet>(null);
  const initialSnapPoints = React.useMemo(() => ['1%', 'CONTENT_HEIGHT'], []);
  const { choosePhoto } = useImagePicker();

  const {
    params: { project },
  } = useRoute<CreateEditProjectRouteProp>();
  const [mode] = React.useState<EMode>(project ? EMode.EDIT : EMode.ADD);
  const userId = useAppSelector(userSelector).user.id;

  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);
  React.useEffect(() => {
    if (ref) {
      ref.current?.scrollForExtraHeightOnAndroid(120);
    }
  }, [ref]);

  const i18n: I18nConfig = {
    dayNames: {
      short: [
        t('calendar:sun'),
        t('calendar:mon'),
        t('calendar:tue'),
        t('calendar:wed'),
        t('calendar:thu'),
        t('calendar:fri'),
        t('calendar:sat'),
      ],
      long: [
        t('calendar:sunday'),
        t('calendar:monday'),
        t('calendar:tuesday'),
        t('calendar:wednesday'),
        t('calendar:thursday'),
        t('calendar:friday'),
        t('calendar:saturday'),
      ],
    },
    monthNames: {
      short: [
        t('calendar:jan'),
        t('calendar:feb'),
        t('calendar:mar'),
        t('calendar:apr'),
        t('calendar:may'),
        t('calendar:jun'),
        t('calendar:jul'),
        t('calendar:aug'),
        t('calendar:sep'),
        t('calendar:oct'),
        t('calendar:nov'),
        t('calendar:dec'),
      ],
      long: [
        t('calendar:january'),
        t('calendar:february'),
        t('calendar:march'),
        t('calendar:april'),
        t('calendar:may'),
        t('calendar:june'),
        t('calendar:july'),
        t('calendar:august'),
        t('calendar:september'),
        t('calendar:october'),
        t('calendar:november'),
        t('calendar:december'),
      ],
    },
  };

  const localeDateService = new NativeDateService('en', {
    i18n,
    startDayOfWeek: 1,
  });

  const refetchQueries = [
    NamedOperations.Query.GetProject,
    NamedOperations.Query.GetProjectByUserId,
    NamedOperations.Query.GetUserGeneral,
  ];

  const { data } = useGetProjectQuery({ variables: { user_id: userId } });

  const [AddProject] = useAddProjectMutation({
    refetchQueries,
  });
  const [UpdateProject] = useUpdateProjectMutation({
    refetchQueries,
  });

  const _onSubmit = React.useCallback(
    async ({
      name,
      budget,
      cost,
      timeline,
      user_id,
      image_url,
    }: FormValues) => {
      try {
        dispatch(setAppLoading(true));
        if (mode === EMode.EDIT && project) {
          const projectExisted = data?.projects.find(
            (i) => i.id !== project.id && i.name === name,
          );
          if (projectExisted) {
            showMessage({
              text1: `Project ${name} already exists`,
              type: 'error',
            });
            return;
          }
          const { data: dataUpdated, errors: errUpdated } = await UpdateProject(
            {
              variables: {
                id: project.id,
                _set: {
                  user_id: user_id,
                  name: name,
                  budget: parseFloat(budget),
                  cost: parseFloat(cost),
                  start_date: timeline?.startDate,
                  end_date: timeline?.endDate,
                  image_url: image_url,
                },
              },
            },
          );

          if (dataUpdated) {
            goBack();
            showMessage({
              text1: `Successfully updated ${name} project`,
              type: 'success',
            });
          } else {
            console.log('errUpdated ', errUpdated);
          }
        } else {
          const projectExisted = data?.projects.find((i) => i.name === name);
          if (projectExisted) {
            showMessage({
              text1: `Project ${name} already exists`,
              type: 'error',
            });
            return;
          }
          const { data: dataAdded, errors: errAdded } = await AddProject({
            variables: {
              input: {
                user_id: user_id,
                name: name,
                budget: parseFloat(budget),
                cost: parseFloat(cost),
                start_date: timeline?.startDate,
                end_date: timeline?.endDate,
                image_url: image_url,
              },
            },
          });
          if (dataAdded) {
            goBack();
            showMessage({
              text1: `Successfully created ${name} project`,
              type: 'success',
            });
          } else {
            console.log('errAdded ', errAdded);
          }
        }
      } finally {
        dispatch(setAppLoading(false));
      }
    },
    [project, userId, data],
  );
  const initialValues: FormValues = {
    image_url: '',
    name: '',
    budget: '',
    cost: '',
    user_id: userId,
    timeline: {
      startDate: dayjs().startOf('day').toDate(),
      endDate: dayjs().endOf('month').toDate(),
    },
  };

  const createUpdateProjectValidationSchema = () => {
    const listProjectName =
      data?.all_projects &&
      data?.all_projects.map((item) => {
        if (project) {
          return '';
        } else {
          return item.name;
        }
      });
    return yup.object().shape({
      name: yup
        .string()
        // @ts-ignore
        .notOneOf(['', ...listProjectName], 'Already name used.')
        .required('Name budget is required'),
      budget: yup.string().required('Budget project is required'),
      cost: yup.string().required('Estimate cost is required'),
      image_url: yup.string(),
      timeline: yup.object({
        startDate: yup.date().required('Start date is required'),
        endDate: yup.date().required('End date is required'),
      }),
    });
  };

  return (
    <Formik
      enableReinitialize={true}
      validationSchema={createUpdateProjectValidationSchema}
      initialValues={
        project
          ? {
              user_id: userId,
              image_url: project.image_url || '',
              name: project.name || '',
              budget: `${project.budget}` || '',
              cost: `${project.cost}` || '',
              timeline: {
                startDate: dayjs(project.start_date).toDate(),
                endDate: dayjs(project.end_date).toDate(),
              },
            }
          : initialValues
      }
      onSubmit={_onSubmit}
      // onSubmit={(values)=>{console.log(values)}}
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
          <Container style={styles.container}>
            <TopNavigation
              appearance="control"
              accessoryRight={
                <TopNavigationAction
                  onPress={goBack}
                  icon={<Icon pack="assets" name="xcircle" />}
                />
              }
            />
            <KeyboardAwareScrollView
              ref={ref}
              enableOnAndroid
              extraHeight={120}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={[
                styles.content,
                { paddingBottom: bottom + 24 },
              ]}
            >
              <Image source={Images.review} />
              <Text category="h2" marginVertical={24} status="placeholder">
                {t('home:new_project')}
              </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() =>
                  choosePhoto((i) => {
                    if (i) {
                      setFieldValue('image_url', i?.base64);
                    } else {
                      setFieldValue('image_url', values.image_url);
                    }
                  })
                }
              >
                <Layout style={styles.buttonUploadImg} level="4">
                  {values.image_url ? (
                    <Avatar size="72" source={{ uri: values.image_url }} />
                  ) : (
                    <Icon
                      pack="assets"
                      name={'arrow_lineup'}
                      style={styles.iconLineup}
                    />
                  )}
                </Layout>
                <Text
                  category="c1"
                  status="platinum"
                  center
                  marginTop={8}
                  marginBottom={16}
                >
                  {t('home:upload_photo')}
                </Text>
              </TouchableOpacity>
              <Input
                value={values.name}
                onBlur={handleBlur('name')}
                status={errors.name ? 'danger' : 'basic'}
                onChangeText={handleChange('name')}
                placeholder={t('home:name_project')}
                caption={errors.name}
                size="medium"
                style={styles.inputBox}
                keyboardType="email-address"
                returnKeyType="next"
              />
              <CurrencyInput
                value={values.budget}
                onBlur={handleBlur('budget')}
                status={errors.budget ? 'danger' : 'basic'}
                onChangeText={handleChange('budget')}
                placeholder={t('home:budget_project')}
                caption={errors.budget}
                size="medium"
                style={styles.inputBox}
                returnKeyType="next"
                keyboardType="numeric"
              />
              <CurrencyInput
                value={values.cost}
                onBlur={handleBlur('cost')}
                status={errors.cost ? 'danger' : 'basic'}
                onChangeText={handleChange('cost')}
                placeholder={t('home:estimate_cost')}
                caption={errors.cost}
                size="medium"
                style={styles.inputBox}
                keyboardType="numeric"
                returnKeyType="next"
              />
              <Input
                value={`${dayjs(values?.timeline?.startDate).format(
                  'MMMM DD',
                )} - ${dayjs(values?.timeline?.endDate).format('MMMM DD')}`}
                placeholder={t('home:timeline')}
                size="medium"
                onBlur={handleBlur('timeline')}
                onChangeText={handleChange('timeline')}
                returnKeyType="done"
                style={styles.inputBox}
                disabled
                textStyle={styles.textStyle}
                onPressIn={() => bottomSheetRef.current?.expand()}
              />
              <Button
                children={
                  mode === EMode.EDIT
                    ? t('home:update_project').toUpperCase()
                    : t('home:create_project').toUpperCase()
                }
                status="info"
                size="medium"
                style={styles.buttonSubmit}
                onPress={() => handleSubmit()}
              />
            </KeyboardAwareScrollView>
            <BottomSheet
              ref={bottomSheetRef}
              snapPoints={animatedSnapPoints}
              index={-1}
              handleHeight={animatedHandleHeight}
              contentHeight={animatedContentHeight}
              backdropComponent={BottomSheetBackdrop}
              style={{ paddingBottom: bottom + 24 }}
            >
              <BottomSheetView
                style={{ paddingBottom: bottom + 24 }}
                onLayout={handleContentLayout}
              >
                <View>
                  {values.timeline && (
                    <DateRangePicker
                      isMonthFirst
                      flatListProps={{ horizontal: true, pagingEnabled: true }}
                      startDate={''}
                      endDate={''}
                      onChange={({ startDate, endDate }) => {
                        handleChange('timeline');
                        setFieldValue('timeline', {
                          startDate: startDate,
                          endDate: endDate,
                        });
                      }}
                    />
                  )}
                </View>
                <Button
                  children={'Done'}
                  activeOpacity={0.7}
                  status="info"
                  onPress={() => {
                    bottomSheetRef?.current?.close();
                  }}
                  style={{ marginHorizontal: 24 }}
                  disabled={
                    values?.timeline?.startDate == undefined ||
                    values?.timeline?.endDate == undefined
                  }
                />
              </BottomSheetView>
            </BottomSheet>
          </Container>
        );
      }}
    </Formik>
  );
});

export default CreateEditProject;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 32,
  },
  iconLineup: {
    width: 16,
    height: 16,
  },
  buttonUploadImg: {
    borderRadius: 99,
    backgroundColor: 'background-basic-color-3',
    alignSelf: 'center',
    width: 72,
    height: 72,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    marginBottom: 24,
  },
  textStyle: {
    height: '100%',
  },
  calendar: {
    alignSelf: 'center',
    paddingTop: 0,
    zIndex: 10,
  },
  buttonSubmit: {},
});
