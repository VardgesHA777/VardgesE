import React from 'react';
import { useHistory } from 'react-router-dom';
import { Divider } from '@mui/material';
import { LogOutField, LogOutPart, LogOutText } from '../../styles';
import { LogOutIcon } from '../../../../components/Base/Icons/Icons';
import { useSignOut } from '../../../../Hooks/user';
import { UseAmplifySignOut } from '../../../../Hooks/maintainerAWS';
import { ClearStorage } from '../../../../shared/Storage';
import { useAppDispatch } from '../../../../contexts/store';

type LogOutProps = {
  handleLoading: (val: boolean) => void;
};

const LogOut = ({ handleLoading }: LogOutProps) => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { reFetch } = UseAmplifySignOut();
  const { reFetch: reFetchSignOut } = useSignOut();
  const logOut = async () => {
    handleLoading(true);
    await reFetchSignOut();
    await reFetch();
    ClearStorage();
    history.push('/');
    dispatch({ type: 'RESET_STATE' });
    return handleLoading(false);
  };
  return (
    <LogOutPart>
      <Divider />
      <LogOutField onClick={logOut}>
        <LogOutIcon />
        <LogOutText>Log Out</LogOutText>
      </LogOutField>
    </LogOutPart>
  );
};

export default LogOut;
