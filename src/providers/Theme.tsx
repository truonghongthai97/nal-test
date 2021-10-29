import { FC } from 'react';
import { ThemeProvider as ThemeProviderBase } from 'styled-components';

import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

const ThemeProvider: FC = ({ children }) => (
  <ThemeProviderBase theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProviderBase>
);

export default ThemeProvider;
