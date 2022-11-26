import React from 'react';
import { AutoComplete } from '@landlord-tech/opp-ui-kit';
import { TextareaAutosize } from '@mui/material';
import { FormBlock, FormFields } from '../../styles';
import { MediumLightGrayText } from '../../../style';
import { AddCommentLabel, TextAreaField } from '../../../../../pages/AnimalComplaint/components/AddComment/styles';
import { ComplaintInformationProps } from '../../../../../types/types';

const complaintTypes = [
  {
    key: 'Unauthorized Animal',
    name: 'Unauthorized Animal',
  },
  {
    key: 'Damage',
    name: 'Damage',
  },
  {
    key: 'Noise Disturbance',
    name: 'Noise Disturbance',
  },
  {
    key: 'Waste Management',
    name: 'Waste Management',
  },
  {
    key: 'Pet Rule Violation',
    name: 'Pet Rule Violation',
  },
  {
    key: 'Aggressive Behavior',
    name: 'Aggressive Behavior',
  },
  {
    key: 'Other',
    name: 'Other',
  },
];

const ComplaintInformation = ({ value, handleChange, handleBlur, errors, touched }: ComplaintInformationProps) => {
  return (
    <FormBlock>
      <MediumLightGrayText>Animal complaint information</MediumLightGrayText>
      <FormFields>
        <AutoComplete
          name='animalComplaintType'
          label='Type of violation'
          handleChange={(name: string, value: any) =>
            handleChange({
              target: {
                name,
                value: value[0].key,
              },
            })
          }
          value={[]}
          multiple={false}
          errorMessage={(touched.animalComplaintType && errors.animalComplaintType) as string}
          placeholder='Complaint Type'
          options={complaintTypes}
          handleBlur={handleBlur}
        />
      </FormFields>
      <TextAreaField>
        <AddCommentLabel>Message</AddCommentLabel>
        <TextareaAutosize
          minRows={5}
          maxRows={7}
          name='message'
          onChange={handleChange}
          aria-label='maximum height'
          placeholder='Type something'
          defaultValue=''
        />
      </TextAreaField>
    </FormBlock>
  );
};

export default ComplaintInformation;
