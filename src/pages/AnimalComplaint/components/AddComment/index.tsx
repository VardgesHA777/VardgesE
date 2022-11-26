import React from 'react';
import { TextareaAutosize } from '@mui/material';
import { Button } from '@landlord-tech/opp-ui-kit';

import { AddCommentS, AddCommentLabel, TextAreaField } from './styles';
import { MediumLightGrayText } from '../../../../components/Base/style';

const AddComment = () => {
  return (
    <AddCommentS>
      <MediumLightGrayText>Add Comment</MediumLightGrayText>
      <TextAreaField>
        <AddCommentLabel>Comments</AddCommentLabel>
        <TextareaAutosize
          minRows={5}
          maxRows={4}
          aria-label='maximum height'
          placeholder='Type something'
          defaultValue=''
        />{' '}
      </TextAreaField>
      <Button text='Add comment' />
    </AddCommentS>
  );
};

export default AddComment;
