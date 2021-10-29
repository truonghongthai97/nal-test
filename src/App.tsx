import BaseLayout from './components/Layouts/BaseLayout';
import ThemeProvider from 'src/providers/Theme';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Router>
          <Switch>
            {routes.map(({ component: Component, path, ...rest }, index) => (
              <Route key={`${path}-${index}`} path={path} {...rest}>
                <BaseLayout>
                  <Component />
                </BaseLayout>
              </Route>
            ))}
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
