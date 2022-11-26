import React from 'react';

import { Button } from '@landlord-tech/opp-ui-kit';
import PasswordFields from './components/FormFields';
import { EditBtns, FormContentS, BackToSettings, SettingsPageName } from '../../styles';
import { UseForm } from '../../../../components/useForm';
import { validationSchema } from '../../validationSchema';
import { useAuthenticatedUser, UseChangeUserPassword } from '../../../../Hooks/maintainerAWS';
import { useAppDispatch } from '../../../../contexts/store';
import { ArrowTopIcon } from '../../../../components/Base/Icons/Icons';
import { TPasswordEditFieldsError } from '../../../Login/types';

type FormContentProps = {
  handleLoading: (val: boolean) => void;
  handleEditableInfo: (val: string) => void;
};

const PasswordFieldsContent = ({ handleLoading, handleEditableInfo }: FormContentProps) => {
  const dispatch = useAppDispatch();
  const { reFetch } = useAuthenticatedUser();
  const { reFetch: reFetchChangeUserPassword } = UseChangeUserPassword(() => {
    handleEditableInfo('');
    dispatch({
      type: 'OPEN_ALERT',
      payload: {
        severity: 'success',
        message: 'Password has been changed!',
      },
    });
  });

  const handleSubmit = async (val: { password: string; currentPassword: string }) => {
    handleLoading(true);
    const { password, currentPassword } = val;
    resetForm();
    const user = await reFetch();
    if (user) {
      await reFetchChangeUserPassword({ user, password, currentPassword });
    }
    handleLoading(false);
  };

  const {
    errors,
    values,
    handleSubmit: handleFormSubmit,
    handleChange,
    resetForm,
    touched,
    handleBlur,
  } = UseForm({
    initialValues: { currentPassword: '', password: '', confirmPassword: '' },
    onSubmit: (val: any) => handleSubmit(val),
    validationSchema,
    validateOnChange: false,
  });

  return (
    <>
      <FormContentS>
        <form id='profileEdit' onSubmit={handleFormSubmit}>
          <BackToSettings onClick={() => handleEditableInfo('')}>
            <ArrowTopIcon color='#5F5F5F' />
            <SettingsPageName>Change password</SettingsPageName>
          </BackToSettings>
          <PasswordFields
            errors={errors as TPasswordEditFieldsError}
            handleBlur={handleBlur}
            values={values}
            touched={touched}
            handleChange={handleChange}
          />
        </form>
        <EditBtns className='profile-edit-btn'>
          <Button className='cancel-btn' text='Cancel' onClick={() => handleEditableInfo('')} />
          <Button
            type='submit'
            text='Save'
            form='profileEdit'
            disabled={!Object.values(values).find((i) => i !== '')}
          />
        </EditBtns>
      </FormContentS>
    </>
  );
};

export default PasswordFieldsContent;
