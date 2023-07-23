import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
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

export default function LayoutWithoutHeader() {
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

  if (!connection) {
    return (
      <Loading />
    );
  }

  return (
    <div>
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}
