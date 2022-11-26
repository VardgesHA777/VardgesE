import React, { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@landlord-tech/opp-ui-kit';

import CircularProgress from '@mui/material/CircularProgress';
import { Loading } from '../../../pages/Login/styles';
import Header from '../Header/Header';
import Modal from '../Modal/Modal';
import ReportAnimalComplaint from '../ReportAnimalComplaint';
import NavBar from '../NavBar';
import { Wrapper, MainLayoutS, ReportAnimalComplaintBtn, GoUp } from './styles';
import { ArrowTopIcon } from '../Icons/Icons';
import { RoutesNames } from '../../../routes/RoutesNames';
import { useGetUser } from '../../../Hooks/user';
import { useAppDispatch, useAppState } from '../../../contexts/store';

type MainLayoutProps = {
  children: ReactNode;
  padding?: string;
  loading?: boolean;
};

const MainLayout = ({ children, padding, loading }: MainLayoutProps) => {
  const dispatch = useAppDispatch();
  const { profile, loading: contextLoading } = useAppState();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { pathname } = useLocation();

  const { reFetch } = useGetUser();

  const [showScroll, setShowScroll] = useState(false);
  const [screenHeight, setScreenHeight] = useState(0);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    (async () => {
      if (!profile) {
        const userData = await reFetch();
        dispatch({
          type: 'SET_PROFILE',
          payload: userData,
        });
      }
    })();
  }, [dispatch, profile]);

  const handleResize = () => {
    setIsKeyboardOpen(window.visualViewport.height < screenHeight);
  };

  const handleNavigation = (e: any) => {
    setShowScroll(e?.currentTarget.scrollY > 0);
  };

  useEffect(() => {
    if (isKeyboardOpen) {
      setShowScroll(false);
      return;
    }
    window.addEventListener('scroll', handleNavigation);
    return () => {
      window.removeEventListener('scroll', handleNavigation);
    };
  }, [isKeyboardOpen]);

  useEffect(() => {
    if (!screenHeight) {
      return;
    }
    window.scrollTo(0, 0);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenHeight]);

  useEffect(() => {
    setScreenHeight(window.innerHeight);
  }, []);

  return (
    <>
      <MainLayoutS>
        {(loading || contextLoading) && (
          <Loading>
            <CircularProgress color='primary' />
          </Loading>
        )}
        <Header userImage={profile?.photoUrl} />
        {!pathname.includes(RoutesNames.settings) && <NavBar />}
        <Wrapper padding={padding}>{children}</Wrapper>
        {!pathname.includes(RoutesNames.settings) && (
          <ReportAnimalComplaintBtn>
            {showScroll && (
              <GoUp onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <ArrowTopIcon />
              </GoUp>
            )}
            <Button onClick={() => setModalOpen(true)} text='Report an animal complaint' />
          </ReportAnimalComplaintBtn>
        )}
        <Modal
          title='Report an animal complaint'
          className='report-animal-complaint'
          open={modalOpen}
          handleClose={() => setModalOpen(false)}
        >
          <ReportAnimalComplaint handleModalOpen={setModalOpen} />
        </Modal>
      </MainLayoutS>
    </>
  );
};

export default MainLayout;
