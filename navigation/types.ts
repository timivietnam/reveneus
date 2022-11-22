import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { ProjectFragment } from 'sdk';

export type RootStackParamList = {
  Onboarding: undefined;
  Auth: { screen: keyof AuthStackParamList };
  Drawer: { screen: keyof DrawerStackParamList };
  NotFound: undefined;
};

export type DrawerStackParamList = {
  DashBoard: undefined;
  Project: NavigatorScreenParams<ProjectStackParamList>;
  TeamMember: undefined;
  AccountSettings: undefined;
  Calendar: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  ResetPassword: undefined;
  Verify: { email: string };
};

export type ProjectStackParamList = {
  CreateEditProject: { project?: ProjectFragment };
  ProjectList: undefined;
  ProjectDetails: { id: string };
};

export type CreateEditProjectRouteProp = RouteProp<
  ProjectStackParamList,
  'CreateEditProject'
>;

export type ProjectDetailsRouteProp = RouteProp<
  ProjectStackParamList,
  'ProjectDetails'
>;

export type VerifyRouteProp = RouteProp<AuthStackParamList, 'Verify'>;
