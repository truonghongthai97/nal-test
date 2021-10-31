import { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import BaseLayout from './components/Layouts/BaseLayout';
import ThemeProvider from 'src/providers/Theme';
import GlobalStateProvider from 'src/providers/Store';
import routes from './routes';

function App() {
  return (
    <GlobalStateProvider>
      <ThemeProvider>
        <div className="App">
          <Router>
            <Suspense fallback={null}>
              <Switch>
                {routes.map(
                  ({ component: Component, path, ...rest }, index) => (
                    <Route key={`${path}-${index}`} path={path} {...rest}>
                      <BaseLayout>
                        <Component />
                      </BaseLayout>
                    </Route>
                  ),
                )}
              </Switch>
            </Suspense>
          </Router>
        </div>
      </ThemeProvider>
    </GlobalStateProvider>
  );
}

export default App;
