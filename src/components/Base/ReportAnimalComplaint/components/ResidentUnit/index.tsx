import React from 'react';
import { Input } from '@landlord-tech/opp-ui-kit';
import { FormBlock, FormFields } from '../../styles';
import { MediumLightGrayText } from '../../../style';
import { ResidentUnitProps } from '../../../../../types/types';

const ResidentUnit = ({ values, touched, errors, handleChange, handleBlur }: ResidentUnitProps) => {
  return (
    <FormBlock margin='40px 0 16px 0'>
      <MediumLightGrayText>Contact info of resident whom complaint is against (if known)</MediumLightGrayText>
      <FormFields className='resident-info'>
        <Input
          type='text'
          name='tenantName'
          value={values.tenantName}
          placeholder='e.g. Resident with Max'
          label="Resident's name"
          onChange={handleChange}
        />
        <Input
          type='text'
          name='unitNumber'
          value={values.unitNumber}
          placeholder='e.g. Resident with Max'
          label='Unit number'
          errorMessage={(touched.unitNumber && errors.unitNumber) as string}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </FormFields>
    </FormBlock>
  );
};

export default ResidentUnit;
