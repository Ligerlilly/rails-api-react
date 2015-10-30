require('./assets/app.css');
require('./assets/menu.css');
require('./assets/blabs.css');



import React from 'react';
import Router from 'react-router';
import routes from './config/routes.jsx';

Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(<Handler />, document.body);
});
