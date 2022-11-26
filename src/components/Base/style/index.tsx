import styled from 'styled-components';

import { theme } from '../../theme';

const Theme = theme as { [key: string]: any };

type IndividualInfoBlockLargeProps = {
  margin?: string;
  display?: string;
  justifyContent?: string;
};

type IndividualInfoBlockProps = {
  width?: string;
  margin?: string;
};

export const InfoTitle = styled.div<{ margin?: string }>`
  color: ${Theme.lightGray};
  font-size: 12px;
  line-height: 15px;
  margin: ${({ margin }) => margin || '0 0 8px 0'};
`;

export const BaseImage = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const MediumImage = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 12px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const IndividualInfoBlock = styled.div<IndividualInfoBlockProps>`
  width: ${({ width }) => width || '50%'};
  margin: ${({ margin }) => margin || 0};
`;

export const IndividualInfoBlockLarge = styled.div<IndividualInfoBlockLargeProps>`
  width: 100%;
  margin: ${({ margin }) => margin || '0 0 16px 0'};
  display: ${({ display }) => display || 'block'};
  justify-content: ${({ justifyContent }) => justifyContent || 'unset'};
`;

export const CartItem = styled.div`
  border: 1px solid ${Theme.primary};
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 12px;
`;

export const MediumLightGrayText = styled.div`
  font-size: 20px;
  color: ${Theme.mediumBlack};
`;

export const AnimalDetailS = styled.div``;
