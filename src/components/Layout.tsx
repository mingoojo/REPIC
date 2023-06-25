import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import getWindowSize from '../utils/getWindowSize';
import Footer from './default/Footer';
import Header from './default/Header';
import useFireBaseConnectionStore from '../hooks/useFireBaseConnectionStore';
import Loading from './default/Loading';

const Container = styled.div`
max-width: 760px;
margin: auto;
padding: 0 1rem 0 1rem;
margin-top: 3rem;
`;

export default function Layout() {
  const { setResize, delResize } = getWindowSize();
  const [{ connection }, ConnectionStore] = useFireBaseConnectionStore();

  // 브라우져 창 크기 전역관리
  useEffect(() => {
    setResize();
    return () => {
      delResize();
    };
  }, []);

  // 파이어베이스 통신연결
  useEffect(() => {
    ConnectionStore.unsubscribe();
  }, []);

  // 로그인페이지와 사인업페이지에서 해더를 보여주지 않기 위한 메서드
  const location = !!(useLocation().pathname === '/login' || useLocation().pathname === '/signup');

  if (!connection) {
    return (
      <Loading />
    );
  }

  return (
    <div>
      {!location && <Header />}
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}
