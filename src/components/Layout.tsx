import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import { appAuth } from '../firebase/config';
import usefetchUnsubscribe from '../hooks/usefetchUnsubscribe';
import useUserStore from '../hooks/useUserStore';
import UserStore from '../store/UserStore';
import Footer from './default/Footer';
import Loading from './default/Loading';

const Container = styled.div`
max-width: 760px;
margin: auto;
`;

export default function Layout() {
  const { unsubscribe } = usefetchUnsubscribe();
  const [{ isAuthReady }] = useUserStore();
  const test = appAuth.currentUser;

  useEffect(() => {
    unsubscribe();
  }, []);

  if (!isAuthReady) {
    return (
      <Loading />
    );
  }

  return (
    <Container>
      <Outlet />
      <Footer />
    </Container>
  );
}
