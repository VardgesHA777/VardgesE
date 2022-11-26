import styled from 'styled-components';
import { theme } from '../../components/theme';

const Theme = theme as { [key: string]: any };

export const PhotoEdit = styled.div`
  text-align: center;
  margin-bottom: 32px;
  padding: 0 20px;
`;

export const ProfilePhotoName = styled.div``;

export const ProfileImage = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  margin: 5px auto 12px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PhotoChange = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 40%;
  z-index: 20;
  background: ${Theme.mediumLightGray};
  opacity: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContentS = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 76px);
  #profileEdit {
    padding: 0 20px;
  }
  .profile-edit-btn {
    position: unset;
  }
`;

export const SettingsPageName = styled.div`
  color: ${Theme.secondGray};
  font-size: 16px;
  margin-left: 10px;
`;

export const BackToSettings = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  svg {
    transform: rotate(-90deg);
  }
`;

export const PasswordFieldS = styled.div`
  margin-top: 4px;
`;

export const LogOutField = styled.div`
  display: flex;
  margin-top: 28px;
`;

export const LogOutPart = styled.div`
  padding: 18px;
`;

export const LogOutText = styled.div`
  color: ${Theme.errorColor};
  margin-left: 15px;
`;

export const EditBtns = styled.div<{ justify?: string }>`
  position: fixed;
  left: 0;
  right: 0;
  display: flex;
  justify-content: ${({ justify }) => justify || 'space-between'};
  margin-top: 50px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  padding: 8px 16px;
  background: white;
  bottom: 0;
  .cancel-btn {
    color: ${Theme.black} !important;
    background: transparent !important;
  }
`;

export const EditProfileContent = styled.div``;

export const PhotoEditInput = styled.div`
  display: none;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;
