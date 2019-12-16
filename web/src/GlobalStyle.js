import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::after,
    &::before {
      box-sizing: border-box;
    }
  }

  html {
    width: 100%;
    height: 100%;
    font-family: 'Source Sans Pro', sans-serif;
  }
`;
