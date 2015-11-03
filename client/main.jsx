require('./assets/app.css');
require('./assets/menu.css');
require('./assets/blabs.css');



import React from 'react';
var ReactRouter = require('react-router');
var Router = ReactRouter .Router;
var Route = ReactRouter .Route;
import ReactDOM from 'react-dom';
var routes = require('./config/routes.jsx');


ReactDOM.render(<Router>{routes}</Router>, document.getElementById('react-app'));
