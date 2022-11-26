import styled from 'styled-components';
import { theme } from '../../components/theme';

const Theme = theme as { [key: string]: any };

type InnerPageAuthSProps = {
  justifyContent?: string;
};

export const InnerPageAuthS = styled.div<InnerPageAuthSProps>`
  position: relative;
  padding: 40px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - 80px);
`;

export const Logo = styled.div`
  text-align: center;
`;

export const TextField = styled.p`
  color: ${Theme.black};
  font-size: 14px;
  line-height: 17px;
  margin: 16px 0 40px;
  text-align: center;
`;

export const AuthContent = styled.div`
  button {
    margin-top: 40px;
  }
`;

export const AuthReminder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  p {
    margin: 0;
  }
`;

export const ResetPasswordReminder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    margin: 0;
  }
`;

export const BackToLogin = styled.div`
  display: flex;
  margin-top: 32px;
`;

export const NotReceivedCode = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const ResetLink = styled.div`
  color: ${Theme.lightBlack};
  font-size: 14px;
  text-decoration: underline;
  text-decoration-color: ${Theme.yellow};
`;

export const InputField = styled.div`
  div {
    width: 100%;
    legend {
      text-align: left;
      font-family: Cabin;
    }
  }
`;

export const ErrorMessage = styled.div`
  margin: 0 5px;
  font-size: 16px;
  font-weight: 500;
  display: inline-block;
  color: ${Theme.errorColor};
  position: absolute;
  left: 0;
  right: 0;
`;

export const Loading = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.5;
  background: black;
  z-index: 1600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ResendCodeLink = styled.div`
  color: ${Theme.yellow};
  font-size: 14px;
  font-weight: 700;
`;

export const PhoneInputS = styled.div`
  position: relative;
  .react-tel-input {
    border: 1px solid ${Theme.yellow};
    .flag-dropdown {
      border: unset;
      border-right: 1px solid ${Theme.yellow};
    }
    .form-control {
      border: unset;
      margin-left: 41px;
      padding-left: 0;
      width: calc(100% - 41px) !important;
    }
  }
`;

export const LabelS = styled.div`
  font-size: 12px;
  color: ${Theme.gray};
  margin-bottom: 8px;
  text-align: left;
  line-height: 19px;
  font-weight: 500;
`;

export const PhoneError = styled.div`
  color: ${Theme.errorColor};
  font-size: 12px;
  font-weight: 400;
  position: absolute;
  left: 0;
  bottom: -20px;
`;
