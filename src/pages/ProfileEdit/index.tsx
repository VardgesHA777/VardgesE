import React, { useState } from 'react';

import MainLayout from '../../components/Base/MainLayout';
import PhotoUpload from './components/PhotoUpload';
import View from './components/View';
import PasswordFieldsContent from './components/FormContent';

export const enum editInfoEnum {
  profile = 'profile',
  password = 'password',
}

const ProfileEdit = () => {
  const [editPartName, setEditableInfo] = useState('');
  const [loading, setLoading] = useState(false);

  const renderProfileEditParts = (editPartName: string) => {
    switch (editPartName) {
      case 'profile':
        return <PhotoUpload handleEditableInfo={setEditableInfo} handleLoading={setLoading} />;
      case 'password':
        return <PasswordFieldsContent handleLoading={setLoading} handleEditableInfo={setEditableInfo} />;
      default:
        return <View handleEditableInfo={setEditableInfo} handleLoading={setLoading} />;
    }
  };

  return (
    <MainLayout padding='20px 0 0' loading={loading}>
      {renderProfileEditParts(editPartName)}
    </MainLayout>
  );
};

export default ProfileEdit;
