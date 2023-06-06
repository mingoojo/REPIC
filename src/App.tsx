import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import Layout from './layout/Layout';
import GlobalStyle from './style/GlobalStyle';
import defaultTheme from './style/Theme/defaultTheme';

const theme = defaultTheme;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
}
