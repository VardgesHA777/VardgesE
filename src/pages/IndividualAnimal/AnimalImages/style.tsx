import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';

export const AnimalImagesWrapper = styled.div`
  padding: 8px 0 20px;
  .slide {
    justify-content: center;
  }
`;

type AnimalImageProps = {
  className: string;
  ref?: any;
};

export const AnimalImagesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 12px;
`;

export const IndividualAnimalImage = styled.div<AnimalImageProps>`
  width: calc(100% / 2 - 10px);
  margin-bottom: 20px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ViewMoreOpacity = styled.div`
  position: absolute;
  top: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  color: white;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
`;

export const SliderImage = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;

export const DialogS = styled(Dialog)`
  .slide {
    display: flex;
    justify-content: center;
  }
  .MuiPaper-root {
    background-color: unset;
    box-shadow: unset;
    position: unset;
    .close-icon {
      position: absolute;
      top: 26px;
      right: 22px;
    }
  }
  button {
    background: unset !important;
  }
`;
