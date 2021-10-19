import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../../pages/main/main';
import NotFound from '../../pages/not-found/not-found';
import SignIn from '../../pages/sign-in/sign-in';

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
        <Route path="/login" exact component={SignIn} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
