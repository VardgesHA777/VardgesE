import styled from 'styled-components';

type WrapperProps = {
  padding?: string;
};

export const Wrapper = styled.div<WrapperProps>`
  padding: ${({ padding }) => `${padding}` || '0 20px'};
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 56px);
`;

export const MainLayoutS = styled.div`
  position: relative;
  min-height: 100vh;
`;

export const ReportAnimalComplaintBtn = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
  padding: 8px 0;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  z-index: 1200;
`;

export const GoUp = styled.div`
  display: flex;
  position: absolute;
  top: -60px;
  right: 10px;
  justify-content: center;
  align-items: center;
  background: linear-gradient(273.36deg, #fcc425 1.27%, #fc9925 99%);
  border-radius: 50%;
  width: 48px;
  height: 48px;
`;
