import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@landlord-tech/opp-ui-kit';
import { ReportAnimalComplaintS } from './styles';
import { UseForm } from '../../useForm';
import { validationSchema } from './validationSchema';
import { useCreateComplaint } from '../../../Hooks/complaint';
import { useAppState, useAppDispatch } from '../../../contexts/store';
import FormContent from './components/FormContent';
import { EditBtns } from '../../../pages/ProfileEdit/styles';

const ReportAnimalComplaint = ({ handleModalOpen }: { handleModalOpen: (val: boolean) => void }) => {
  const dispatch = useAppDispatch();
  const {
    location: { state },
  } = useHistory() as { location: { state: { propertyId: string; unitNumber: string } } };
  const { profile } = useAppState();
  const [imageUrls, setImageUrls] = useState<string[] | []>([]);

  const { reFetch } = useCreateComplaint(() => {
    handleModalOpen(false);
    dispatch({
      type: 'OPEN_ALERT',
      payload: {
        severity: 'success',
        message: 'Complaint successfully submitted',
      },
    });
  });

  const handleSubmit = async (val: any) => {
    await reFetch({
      body: {
        ...val,
        createdUserId: profile.id,
        status: 'Pending',
        unitId: Number(val.unitId),
        ...(imageUrls.length > 0 && { photos: imageUrls }),
      },
    });
  };

  const {
    errors,
    values,
    touched,
    handleBlur,
    setErrors,
    handleSubmit: handleFormSubmit,
    handleChange,
  } = UseForm({
    initialValues: {
      rentalId: state?.propertyId ? state.propertyId : '',
      unitNumber: state?.unitNumber ? state.unitNumber : '',
      animalComplaintType: '',
    },
    onSubmit: (val: {
      rentalId: string;
      unitNumber: string;
      animalComplaintType: string;
      tenantName?: string;
      message?: string;
    }) => handleSubmit(val),
    validationSchema,
    validateOnChange: true,
  });

  useEffect(() => {
    if (values.rentalId && errors.rentalId) {
      setErrors({
        ...errors,
        rentalId: '',
      });
    } else if (values.animalComplaintType && errors.animalComplaintType) {
      setErrors({
        ...errors,
        animalComplaintType: '',
      });
    }
  }, [errors, setErrors, values]);

  return (
    <>
      <ReportAnimalComplaintS>
        <form id='save-new-complaint' onSubmit={handleFormSubmit}>
          <FormContent
            errors={errors}
            touched={touched}
            values={values}
            handleBlur={handleBlur}
            handleChange={handleChange}
            setImageUrls={setImageUrls}
            imageUrls={imageUrls}
          />
        </form>
      </ReportAnimalComplaintS>
      <EditBtns justify='center' className='edit-btn'>
        <Button form='save-new-complaint' className='submit-complaint' type='submit' text='Submit animal complaint' />
      </EditBtns>
    </>
  );
};

export default ReportAnimalComplaint;
