import styled from 'styled-components';
import { theme } from '../../theme';

const Theme = theme as { [key: string]: any };

export const Thumb = styled.div`
  margin: 0 10px 10px 0;
  position: relative;
  width: calc(100% / 6);
  aspect-ratio: 1 / 1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DropImg = styled.img`
  display: block;
  width: 268px;
  height: 156px;
  border-radius: 24px;
  object-fit: cover;
`;

export const ThumbContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  cursor: pointer;
`;

export const DropInputWrapperEmpty = styled.div`
  width: calc(100% - 24px);
  border: 1px dashed #fcc425;
  border-radius: 8px;
  background-color: #ffffff;
  text-align: center;
  padding: 16px 12px;
  margin-top: 8px;
`;

export const StyledErrorMessage = styled.p`
  position: absolute;
  left: 0;
  bottom: -34px;
  color: ${Theme.errorColor};
  padding-bottom: 15px;
  white-space: nowrap;
`;

export const Label = styled.div`
  padding: 0;
  position: relative;
  color: ${Theme.lightBlack} !important;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 8px;
  font-weight: 500;
`;

export const DragText = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
`;

export const OrText = styled.div`
  font-size: 16px;
  margin: 12px 0 24px;
  color: ${Theme.lightBlack};
`;

export const Close = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
