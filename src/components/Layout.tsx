import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import useUnsubscribeFireStore from '../hooks/useUnsebscribeFireStore';
// import useUnsebscribeFireBase from '../hooks/useUnsebscribeFireBase';
import UserStore from '../store/UserStore';
import Footer from './default/Footer';
import Loading from './default/Loading';

const Container = styled.div`
max-width: 760px;
margin: auto;
`;

export default function Layout() {
  const Store = container.resolve(UserStore);
  const [, store] = useStore(Store);

  const { unsubscribe } = useUnsubscribeFireStore();

  useEffect(() => (
    // 로딩상태 구독
    unsubscribe()
  ), []);

  return (
    <Container>
      {
        store.isAuthReady ? (
          <>
            {/* <Header /> */}
            <Outlet />
            <Footer />
          </>
        ) : (
          <Loading />
        )
      }
    </Container>
  );
}
