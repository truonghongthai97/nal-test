// import original module declarations
import 'styled-components';
import theme from '../styles/theme';

type Theme = typeof theme;

// and extend them!
declare module 'styled-components' {
  interface DefaultTheme extends Theme {}
}
