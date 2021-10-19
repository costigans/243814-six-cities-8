import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Main from '../../pages/main/main';
import SignIn from '../../pages/sign-in/sign-in';
import Room from '../../pages/room/room';
import Favorites from '../../pages/favorites/favorites';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from "../private-route/private-route";

type AppProps = {
  placesCount: number;
}

function App({placesCount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Root} exact>
          <Main placesCount={placesCount} />
        </Route>
        <PrivateRoute path={AppRoute.Favorites} exact
          render={Favorites}
          authorizationStatus={AuthorizationStatus.NoAuth}>
          <Favorites />
        </PrivateRoute>
        <Route path={AppRoute.Login} exact>
          <SignIn />
        </Route>
        <Route path={AppRoute.Offer} exact>
          <Room />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
