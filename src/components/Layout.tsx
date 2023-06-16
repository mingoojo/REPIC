import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import usefetchUnsubscribe from '../hooks/usefetchUnsubscribe';
import useUserStore from '../hooks/useUserStore';
import Footer from './default/Footer';
import Loading from './default/Loading';
import Header from './default/Header';

const ContainerLayout = styled.div`
max-width: 760px;
margin: auto;
padding: 0 1.5rem 0 1.5rem;
margin-top: 3rem;
`;

export default function Layout() {
  const location = useLocation();
  const { unsubscribe } = usefetchUnsubscribe();
  const [{ isAuthReady }] = useUserStore();
  const headerCondition = location.pathname === '/login' || location.pathname === '/signup';

  useEffect(() => {
    unsubscribe();
  }, []);

  if (!isAuthReady) {
    return (
      <Loading />
    );
  }

  return (
    <div>
      {/* 일정페이지에서 헤더를 안보이게 하기 위한 조건식 */}
      {
        !headerCondition ? (
          <Header />
        ) : (
          null
        )
      }
      <ContainerLayout>
        <Outlet />
      </ContainerLayout>
      <Footer />
    </div>
  );
}
