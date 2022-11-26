import React, { useEffect } from 'react';
import { AutoComplete } from '@landlord-tech/opp-ui-kit';
import { FormBlock, FormFields } from '../../styles';
import { MediumLightGrayText } from '../../../style';
import { useGetRentalNames } from '../../../../../Hooks/rental';
import { useAppState } from '../../../../../contexts/store';
import { ReportAnimalComplaintAddressProps } from '../../../../../types/types';

const Address = ({ handleChange, value, errors, handleBlur, touched }: ReportAnimalComplaintAddressProps) => {
  const { profile } = useAppState();
  const { reFetch, data = [] } = useGetRentalNames();

  useEffect(() => {
    if (profile) {
      reFetch({
        params: {
          maintainerId: profile.id,
        },
      });
    }
  }, [profile]);

  return (
    <FormBlock>
      <MediumLightGrayText>Address form</MediumLightGrayText>
      <FormFields>
        <AutoComplete
          name='rentalId'
          label='Property name'
          handleChange={(name: string, value: any) => {
            handleChange({
              target: {
                name,
                value: value[0].key,
              },
            });
          }}
          value={[]}
          placeholder='Property name'
          errorMessage={(touched.rentalId && errors.rentalId) as string}
          options={data || []}
          multiple={false}
          handleBlur={handleBlur}
        />
      </FormFields>
    </FormBlock>
  );
};

export default Address;
