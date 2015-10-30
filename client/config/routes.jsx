import React from 'react';
import Router from 'react-router';
import App from '../components/layout/App.jsx';
import BlabsView from '../components/blabs/View.jsx';
import AboutView from '../components/static/AboutView.jsx';

let Route = Router.Route;
let DefaultRoute = Router.DefaultRoute;

module.exports = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute name="blabs" handler={BlabsView} />
    <Route name="about" handler={AboutView} />
  </Route>
);
