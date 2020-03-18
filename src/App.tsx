import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import HomeView from './views/homeView';
import CityView from './views/cityView';

function App() {
  const AppRoutes = (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeView}></Route>
        <Route exact path="/:city" component={CityView}></Route>
      </Switch>
    </BrowserRouter>
  );

  return AppRoutes;
}

export default App;