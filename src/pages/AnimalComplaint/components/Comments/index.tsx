import React, { useState } from 'react';
import { Typography, Collapse } from '@mui/material';

import { InfoTitle } from '../../../../components/Base/style';
import { ArrowTopIcon } from '../../../../components/Base/Icons/Icons';
import { CommentsS, Comment, ReportedUser, ExpandMore } from './styles';

const Comments = () => {
  const [expanded, setExpanded] = useState(true);
  return (
    <CommentsS>
      <ExpandMore onClick={() => setExpanded(!expanded)} expanded={expanded}>
        <Typography>Comments</Typography>
        <ArrowTopIcon />
      </ExpandMore>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <Comment>
          <ReportedUser>
            <Typography component='h5' variant='h5'>
              John Doe
            </Typography>
            <InfoTitle>about 15h ago</InfoTitle>
          </ReportedUser>
          <Typography component='h5' variant='h5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie dictum massa, vivamus auctor nisl amet
            porttitor lacus enim. Nunc non, elementum lorem enim nunc tortor.{' '}
          </Typography>
        </Comment>
        <Comment>
          <ReportedUser>
            <Typography component='h5' variant='h5'>
              John Doe
            </Typography>
            <InfoTitle margin='0'>about 15h ago</InfoTitle>
          </ReportedUser>
          <Typography component='h5' variant='h5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie dictum massa, vivamus auctor nisl amet
            porttitor lacus enim. Nunc non, elementum lorem enim nunc tortor.{' '}
          </Typography>
        </Comment>
      </Collapse>
    </CommentsS>
  );
};

export default Comments;
