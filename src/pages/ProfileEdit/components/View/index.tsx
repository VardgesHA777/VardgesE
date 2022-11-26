import React from 'react';
import { ProfileImage, ProfilePhotoName, Wrapper } from '../../styles';
import profileIcon from '../../../../assets/images/profileIcon.svg';
import { FilterByOptionField, OptionText, OptionTextArrow } from '../../../../components/Base/Filters/styles';
import { ArrowTopIcon } from '../../../../components/Base/Icons/Icons';
import { editInfoEnum } from '../../index';
import { useAppState } from '../../../../contexts/store';
import LogOut from '../LogOut';
import UpdateSection from './components/UpdateSection';

const View = ({
  handleEditableInfo,
  handleLoading,
}: {
  handleEditableInfo: (val: editInfoEnum) => void;
  handleLoading: (val: boolean) => void;
}) => {
  const { profile } = useAppState();

  return (
    <Wrapper>
      <div>
        <ProfilePhotoName>
          <ProfileImage>
            <img src={profile?.photoUrl || profileIcon} alt='' />
          </ProfileImage>
        </ProfilePhotoName>
        <FilterByOptionField onClick={() => handleEditableInfo(editInfoEnum.profile)}>
          <OptionTextArrow>
            <OptionText component='h5' variant='h5'>
              Profile settings
            </OptionText>
            <ArrowTopIcon />
          </OptionTextArrow>
        </FilterByOptionField>
        <FilterByOptionField onClick={() => handleEditableInfo(editInfoEnum.password)}>
          <OptionTextArrow>
            <OptionText component='h5' variant='h5'>
              Change password
            </OptionText>
            <ArrowTopIcon />
          </OptionTextArrow>
        </FilterByOptionField>
      </div>

      <div>
        <UpdateSection />
        <LogOut handleLoading={handleLoading} />
      </div>
    </Wrapper>
  );
};

export default View;
