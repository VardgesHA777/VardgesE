import styled from 'styled-components';

import { theme } from '../../theme';

const Theme = theme as { [key: string]: any };

export const NameImage = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const IndividualInfo = styled.div`
  width: 50%;
  text-align: left;
`;

export const PropertyNumberPart = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

export const ViewBox = styled.div<{ margin?: string }>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: ${({ margin }) => margin || '8px 0 0 0 '};
`;

export const InfoTitleDate = styled.div`
  font-size: 14px;
  color: ${Theme.secondGray};
  margin-bottom: 10px;
`;

export const PropertieList = styled.div`
  margin-top: 28px;
`;
export const LoadMoreBtn = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const LoadMoreItemsS = styled.div`
  margin-bottom: 80px;
`;
