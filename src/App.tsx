import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import { appAuth } from './firebase/config';
import useDispatch from './hooks/useDispatch';
import useStore from './hooks/useStore';
import routes from './routes';
import { authReadyUser } from './store/Store';
import GlobalStyle from './style/GlobalStyle';
import defaultTheme from './style/Theme/defaultTheme';

const theme = defaultTheme;

export default function App() {
  const router = createBrowserRouter(routes);
  const dispatch = useDispatch();
  const store = useStore();
  const { isAuthReady } = store.state;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(appAuth, (user) => {
      dispatch(authReadyUser(JSON.stringify(user)));
    });
    unsubscribe();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      {
        isAuthReady ? <RouterProvider router={router} /> : <div>loading</div>
      }
    </ThemeProvider>
  );
}
