import * as yup from 'yup';
import 'yup-phone';
import YupPassword from 'yup-password';
YupPassword(yup);

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email address is required'),
  password: yup.string().required('Password is required'),
  //.minLowercase(1, 'Password must contain at least 1 lower case letter')
  //.minUppercase(1, 'Password must contain at least 1 upper case letter')
  //.minNumbers(1, 'Password must contain at least 1 number')
  // .min(
  //   8,
  //   'Password must contain 8 or more characters with at least one of each: uppercase, lowercase and number',
  // ),
});

const registerValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup.string().required('Password is required'),
  //.minLowercase(1, 'Password must contain at least 1 lower case letter')
  //.minUppercase(1, 'Password must contain at least 1 upper case letter')
  //.minNumbers(1, 'Password must contain at least 1 number')
  // .min(
  //   8,
  //   'Password must contain 8 or more characters with at least one of each: uppercase, lowercase and number',
  // ),
  re_password: yup
    .string()
    .required('Re Password is required')
    .oneOf([yup.ref('password'), null], 'Re password must match'),
});

const forgotPasswordValidation = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
});

const resetPasswordValidation = yup.object().shape({
  password: yup.string().required('New Password is required'),
  //.minLowercase(1, 'Password must contain at least 1 lower case letter')
  //.minUppercase(1, 'Password must contain at least 1 upper case letter')
  //.minNumbers(1, 'Password must contain at least 1 number')
  // .min(
  //   8,
  //   'Password must contain 8 or more characters with at least one of each: uppercase, lowercase and number',
  // ),
  re_password: yup
    .string()
    .required('Confirm new password is required')
    .oneOf([yup.ref('password'), null], 'Confirm new password must match'),
});

const changePasswordValidation = yup.object().shape({
  password: yup.string().required('New Password is required'),
  //.minLowercase(1, 'Password must contain at least 1 lower case letter')
  //.minUppercase(1, 'Password must contain at least 1 upper case letter')
  //.minNumbers(1, 'Password must contain at least 1 number')
  // .min(
  //   8,
  //   'Password must contain 8 or more characters with at least one of each: uppercase, lowercase and number',
  // ),
  re_password: yup
    .string()
    .required('Confirm new password is required')
    .oneOf([yup.ref('password'), null], 'Confirm new password must match'),
});

const addBudgetValidationSchema = yup.object().shape({
  name: yup.string().required('Name budget is required'),
  amount: yup.string().required('Amount budget is required'),
});

const addCostValidationSchema = yup.object().shape({
  name: yup.string().required('Name budget is required'),
  amount: yup.string().required('Amount budget is required'),
});

const addProjectMemberValidationSchema = yup.object().shape({
  hour_working: yup.string().required('Hour working is required'),
});
const addUpdateMemberValidationSchema = yup.object().shape({
  full_name: yup.string().required('Full name is required'),
  hour_rate: yup.string().required('Hour rate is required'),
});

const createUpdateProjectValidationSchema = yup.object().shape({
  name: yup.string().required('Name budget is required'),
  budget: yup.string().required('Budget project is required'),
  cost: yup.string().required('Estimate cost is required'),
  image_url: yup.string(),
  timeline: yup.string().required('Timeline is required'),
});

export {
  loginValidationSchema,
  forgotPasswordValidation,
  resetPasswordValidation,
  registerValidationSchema,
  addBudgetValidationSchema,
  addCostValidationSchema,
  addUpdateMemberValidationSchema,
  createUpdateProjectValidationSchema,
  changePasswordValidation,
  addProjectMemberValidationSchema,
};
