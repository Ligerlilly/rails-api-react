import React from 'react';
var App = require('../components/layout/App.jsx');
import BlabsView from '../components/blabs/View.jsx';
import AboutView from '../components/static/AboutView.jsx';
import { Router, Route, IndexRoute } from 'react-router'



module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={BlabsView} />
    <Route path="blabs" component={BlabsView} />
    <Route path="about" component={AboutView} />
  </Route>
);
