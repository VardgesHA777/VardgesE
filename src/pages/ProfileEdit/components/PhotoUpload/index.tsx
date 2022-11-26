import React, { useState } from 'react';

import { Button, Input } from '@landlord-tech/opp-ui-kit';
import {
  BackToSettings,
  EditBtns,
  PhotoChange,
  PhotoEdit,
  PhotoEditInput,
  ProfileImage,
  SettingsPageName,
} from '../../styles';
import { ArrowTopIcon, PhotoEditIcon } from '../../../../components/Base/Icons/Icons';
import profileIcon from '../../../../assets/images/profileIcon.svg';
import { Upload } from '../../../../shared/file';
import { usePhotoUpload } from '../../../../Hooks/uploadFile';
import { useAppState, useAppDispatch } from '../../../../contexts/store';
import { useSaveUserChangedPhoto } from '../../../../Hooks/user';
import { InputField } from '../../../Login/styles';

type PhotoUploadProps = {
  handleLoading: (val: boolean) => void;
  handleEditableInfo: (val: string) => void;
};

const PhotoUpload = ({ handleLoading, handleEditableInfo }: PhotoUploadProps) => {
  const dispatch = useAppDispatch();
  const user = JSON.parse(localStorage.getItem('user') as string);
  const [updatedPhotoUrl, setUpdatedPhotoUrl] = useState('');
  const { name } = user.attributes;
  const { profile } = useAppState();

  const { reFetch } = usePhotoUpload(async (photoUrl) => {
    setUpdatedPhotoUrl(photoUrl);
  });

  const { reFetch: saveReFetch } = useSaveUserChangedPhoto(profile?.id, (data) => {
    dispatch({
      type: 'SET_PROFILE',
      payload: {
        ...profile,
        photoUrl: data.photoUrl,
      },
    });
    dispatch({
      type: 'OPEN_ALERT',
      payload: {
        severity: 'success',
        message: 'Your profile picture was updated successfully',
      },
    });
    handleEditableInfo('');
  });

  const handleUploadClick = async (event: any) => {
    handleLoading(true);
    const selectedFile = event.target.files[0];
    const formData = Upload({ file: selectedFile });

    await reFetch({ body: formData });
    handleLoading(false);
  };

  const save = async () => {
    await saveReFetch({
      body: {
        photoUrl: updatedPhotoUrl || '',
      },
    });
  };

  return (
    <PhotoEdit>
      <BackToSettings onClick={() => handleEditableInfo('')}>
        <ArrowTopIcon color='#5F5F5F' />
        <SettingsPageName>Profile settings</SettingsPageName>
      </BackToSettings>
      <ProfileImage>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label htmlFor='contained-button-profile'>
          <img src={updatedPhotoUrl || profile?.photoUrl || profileIcon} alt='' />
        </label>
        <PhotoEditInput>
          <input accept='.jpg,.jpeg,.png' id='contained-button-profile' type='file' onChange={handleUploadClick} />
        </PhotoEditInput>
        <PhotoChange>
          <PhotoEditIcon />
        </PhotoChange>
      </ProfileImage>
      <InputField>
        <Input type='text' value={name} name='name' placeholder='Name' label='Full name' disabled onChange={() => {}} />
      </InputField>
      <EditBtns>
        <Button className='cancel-btn' text='Cancel' onClick={() => handleEditableInfo('')} />
        <Button text='Save' disabled={!updatedPhotoUrl} onClick={save} />
      </EditBtns>
    </PhotoEdit>
  );
};

export default PhotoUpload;
