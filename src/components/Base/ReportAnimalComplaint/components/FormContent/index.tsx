import React from 'react';
import { useHistory } from 'react-router-dom';
import { FormBlock, FormContentS } from '../../styles';
import Address from '../Address';
import ResidentUnit from '../ResidentUnit';
import ComplaintInformation from '../ComplaintInformation';
import PhotoDropzone from '../../../MultiplePhotoUpload';
import { CreateAnimalComplaintFormProps } from '../../../../../types/types';

const FormContent = ({
  handleBlur,
  handleChange,
  values,
  errors,
  touched,
  imageUrls,
  setImageUrls,
}: CreateAnimalComplaintFormProps) => {
  const {
    location: { state },
  } = useHistory() as { location: { state: { propertyId: number } } };
  return (
    <FormContentS>
      <Address
        handleBlur={handleBlur}
        handleChange={handleChange}
        value={values.rentalId || state?.propertyId}
        errors={errors}
        touched={touched}
      />
      <ResidentUnit
        handleBlur={handleBlur}
        values={values}
        errors={errors}
        touched={touched}
        handleChange={handleChange}
      />
      <ComplaintInformation
        handleChange={handleChange}
        value={values.animalComplaintType}
        errors={errors}
        touched={touched}
        handleBlur={handleBlur}
      />
      <FormBlock margin='0 0 100px 0'>
        <PhotoDropzone
          className='complaint-image'
          label='Add images or videos'
          imageUrls={imageUrls}
          setImageUrls={setImageUrls}
        />
      </FormBlock>
    </FormContentS>
  );
};

export default FormContent;
