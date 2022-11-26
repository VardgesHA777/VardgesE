import { object, string } from 'yup';

export const validationSchema = object({
  rentalId: string().required('Property name is required'),
  unitNumber: string().required('Unit number is required'),
  animalComplaintType: string().required('Violation type is required'),
});
