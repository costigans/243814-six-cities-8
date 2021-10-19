import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from '../main/main';
import NotFound from '../../pages/not-found/not-found';

type AppProps = {
  placesCount: number;
}

function App({placesCount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage placesCount={placesCount} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
