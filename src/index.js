import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Intro from './Intro';
import CountriesContainer from './CountriesContainer';
import './index.css';

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

ReactDOM.render(
  routes,
  document.getElementById('root')
);
