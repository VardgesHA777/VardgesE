import styled from 'styled-components';
import { theme } from '../../../../components/theme';

const Theme = theme as { [key: string]: any };

export const AddCommentS = styled.div`
  border-radius: 8px;
  padding: 24px 16px;
  background: ${Theme.mediumLightGray};
  button {
    background-color: #ffffff !important;
    border: 1px solid ${Theme.yellow};
  }
`;

export const TextAreaField = styled.div`
  margin: 24px 0;
  textarea {
    border: 1px solid ${Theme.yellow};
    padding: 12px;
    width: calc(100% - 24px);
    color: ${Theme.lightBlack};
    font-size: 16px;
    outline: unset !important;
  }
  textarea::placeholder {
    color: ${Theme.lightGray};
  }
`;

export const AddCommentLabel = styled.div`
  font-size: 12px;
  color: ${Theme.gray};
  margin-bottom: 8px;
`;
