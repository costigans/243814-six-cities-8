import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import SignIn from '../../pages/sign-in/sign-in';
import Favorites from '../../pages/favorites/favorites';
import Room from '../../pages/room/room';

type AppProps = {
  placesCount: number;
}

function App({placesCount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main placesCount={placesCount} />
        </Route>
        <Route path="/favorites" exact component={Favorites} />
        <Route path="/login" exact component={SignIn} />
        <Route path="/offer/:id" exact component={Room} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
