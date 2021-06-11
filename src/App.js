import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

import ErrorBoundary from './components/error-boundary';
import Navigation from './components/navigation/navigation';
import AuthPage from './pages/auth/auth-page';
import MainPage from './pages/mainPage';
import SingleMoviePage from './pages/singleMoviePage/single-movie-page';

function App() {
  return (
    <ErrorBoundary>
      <Navigation></Navigation>
      <Switch>
        <Route path="/wishlist">
          <SingleMoviePage></SingleMoviePage>
        </Route>
        <Route path="/auth">
          <AuthPage></AuthPage>
        </Route>
        <Route path="/">
          <MainPage></MainPage>
        </Route>
      </Switch>
    </ErrorBoundary>
  );
}

export default App;
