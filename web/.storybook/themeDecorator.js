import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/config/theme';
import { GlobalStyle } from '../src/GlobalStyle'

const ThemeDecorator = (storyFn) => (
  <>
    <ThemeProvider theme={theme}>
      {storyFn()}
      <GlobalStyle />
    </ThemeProvider>
  </>
);

export default ThemeDecorator;
