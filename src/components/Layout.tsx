import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import usefetchUnsubscribe from '../hooks/usefetchUnsubscribe';
import useUserStore from '../hooks/useUserStore';
import Footer from './default/Footer';
import Loading from './default/Loading';

const Container = styled.div`
max-width: 760px;
margin: auto;
`;

export default function Layout() {
  const { unsubscribe } = usefetchUnsubscribe();
  const [{ isAuthReady }] = useUserStore();

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
