import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import Main from '../../pages/main/main';
import SignIn from '../../pages/sign-in/sign-in';
import Room from '../../pages/room/room';
import Favorites from '../../pages/favorites/favorites';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import {Property} from "../../types/property";

type AppProps = {
  placesCount: number;
  offers: Property[]
}

function App({placesCount, offers}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <Main placesCount={placesCount} />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={Favorites}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Login}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.Offer}>
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
