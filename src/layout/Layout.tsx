import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import Header from '../components/default/Header';
import { appAuth } from '../firebase/config';
import HomePage from '../pages/Homepage';
import LogInPage from '../pages/LogInPage';
import SignUpPage from '../pages/SignUpPage';
import UserStore from '../store/UserStore';
import ContainerDiv from '../style/default/layoutStyle';

export default function Layout() {
  const Store = container.resolve(UserStore);
  const [{ isAuthReady }, store] = useStore(Store);
  const { currentUser } = appAuth;

  useEffect(() => {
    const unsubscribe = appAuth.onAuthStateChanged((user) => {
      store.isAuthUpdate(true);
      store.UserUpdate(user);
    });
    return unsubscribe();
  }, []);

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  return (
    <div>
      {
        isAuthReady ? (
          <ContainerDiv>
            <Header />
            <Routes>
              <Route path="/" element={currentUser ? <HomePage /> : <Navigate replace to="/login" />} />
              <Route path="/signup" element={!currentUser ? <SignUpPage /> : <Navigate replace to="/" />} />
              <Route path="/login" element={!currentUser ? <LogInPage /> : <Navigate replace to="/" />} />
            </Routes>
            <footer>footer</footer>
          </ContainerDiv>
        ) : (
          <p>loading</p>)
      }
    </div>

  );
}
