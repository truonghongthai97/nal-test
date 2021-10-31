import { FC } from 'react';
import { Provider } from 'react-redux';

import store from 'src/store';

const GlobalStateProvider: FC = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default GlobalStateProvider;
