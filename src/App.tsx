import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import { useDarkMode } from 'usehooks-ts';
import routes from './routes';
import './font.css';
import GlobalStyle from './style/GlobalStyle';
import defaultTheme from './style/Theme/defaultTheme';
import darkTheme from './style/Theme/darkTheme';

const router = createBrowserRouter(routes);
export default function App() {
  const { isDarkMode } = useDarkMode();
  const theme = isDarkMode ? defaultTheme : darkTheme;
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
