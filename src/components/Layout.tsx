import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import useUnsubscribeFireStore from '../hooks/useUnsebscribeFireStore';
import useWindowSizeCustom from '../hooks/useWindowSizeCustom';
// import useUnsebscribeFireBase from '../hooks/useUnsebscribeFireBase';
import UserStore from '../store/UserStore';
import Footer from './default/Footer';
import Loading from './default/Loading';

const Container = styled.div`
  margin: 0 5% 0 5%;
`;

export default function Layout() {
  const Store = container.resolve(UserStore);
  const [, store] = useStore(Store);

  const { unsubscribe } = useUnsubscribeFireStore();

  const { windowWidthSize } = useWindowSizeCustom();

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
