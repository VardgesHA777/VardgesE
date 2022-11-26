import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';

import { Flex } from '../../../../IndividualAnimal/style';
import { IndividualItemS } from '../../../../Animals/components/Animal/style';
import { UnitCount } from './styles';
import { ViewBox } from '../../../../../components/Base/Propertie/style';
import IconButton from '../../../../../components/Base/Buttons/IconButton';
import { RoutesNames } from '../../../../../routes/RoutesNames';

const Unit = ({
  item,
}: {
  item: {
    id: number;
    number: string;
  };
}) => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  return (
    <IndividualItemS justifyContent='space-between' alignItems='center'>
      <Flex margin='0'>
        <Typography component='h5' variant='h5'>
          Unit number:
        </Typography>
        <UnitCount>{item.number}</UnitCount>
      </Flex>
      <ViewBox margin='0'>
        <IconButton
          handleClick={() =>
            history.push({
              pathname: `${RoutesNames.units}/${item.id}`,
              state: {
                unitNumber: item.number,
                propertyId: id,
              },
            })
          }
        >
          View
        </IconButton>
      </ViewBox>
    </IndividualItemS>
  );
};

export default Unit;
