import { object, ref, string } from 'yup';

export const validationSchema = object({
  currentPassword: string().required('Current password is required'),
  password: string()
    .required('Password is required')
    .min(8, 'Password must contain at least 8 characters')
    .matches(/[A-Z]/, 'Password should contain 1 uppercase letter')
    .matches(/[a-z]/, 'Password should contain 1 lowercase letter')
    .matches(/[^\w]/, 'Password should contain 1 special character')
    .matches(/[0-9]/, 'Password must contain at least 1 digit'),
  confirmPassword: string()
    .required('Passwords must match')
    .oneOf([ref('password'), null], 'Passwords must match'),
});
