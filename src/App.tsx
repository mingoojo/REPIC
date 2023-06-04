import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import routes from './routes';
import GlobalStyle from './style/GlobalStyle';
import defaultTheme from './style/Theme/defaultTheme';

const theme = defaultTheme;

export default function App() {
  const router = createBrowserRouter(routes);

  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
