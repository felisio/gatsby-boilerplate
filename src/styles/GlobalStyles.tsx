import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    /* To remove blue background on mobile */
    -webkit-tap-highlight-color: transparent;
  }
  html {
    background-color: var(--bg-primary);
    font-family: 'ApercuRegularPro', 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--text-primary);
    font-size: 10px;
    height: 100%;
    -webkit-font-smoothing: antialiased;
  }
`;

export default GlobalStyles;
