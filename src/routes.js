import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import Intro from './components/Intro';
import CountriesContainer from './components/CountriesContainer';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Intro} />
      <Route path="countries" component={CountriesContainer}>
        <Route path=":countryCode" component={CountriesContainer} />
      </Route>
    </Route>
  </Router>
);

export default routes;
