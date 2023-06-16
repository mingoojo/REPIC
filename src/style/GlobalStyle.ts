import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: ${(props) => props.theme.colors.backgroundMain};
    color: ${(props) => props.theme.colors.textMain};
    font-size: 1.6rem;
    font-family: 'Noto Sans CJK KR';
    font-style: normal;
    font-weight: 500;
    padding-top: 80px;
  }
  label{
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none
  }
  :lang(ko) {
    h1, h2, h3 {
      word-break: keep-all;
    }
  }
`;

export default GlobalStyle;
