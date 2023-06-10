import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import useUnsubscribeFireStore from '../hooks/useUnsebscribeFireStore';
// import useUnsebscribeFireBase from '../hooks/useUnsebscribeFireBase';
import UserStore from '../store/UserStore';
import Footer from './default/Footer';
import Header from './default/Header';
import Loading from './default/Loading';

export default function Layout() {
  const Store = container.resolve(UserStore);
  const [, store] = useStore(Store);

  const { unsubscribe } = useUnsubscribeFireStore();

  useEffect(() => (
    // 로딩상태 구독
    unsubscribe()
  ), []);

  return (
    <div>
      {
        store.isAuthReady ? (
          <>
            <Header />
            <Outlet />
            <Footer />
          </>
        ) : (
          <Loading />
        )
      }
    </div>
  );
}
