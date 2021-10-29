import { createGlobalStyle } from 'styled-components';
import reset from './reset';
import base from './base';

// @ts-ignore
export default createGlobalStyle`
  ${reset}
  ${base}
`;
