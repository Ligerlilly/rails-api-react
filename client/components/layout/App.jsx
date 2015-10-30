import React from 'react';
import Reqwest from 'reqwest';
import BlabsView from '../blabs/View.jsx';
import Menu from './Menu.jsx';
import Router from 'react-router';
let RouteHandler = Router.RouteHandler;


module.exports = React.createClass({
  getDefaultProps() {
    return { origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''};
  },
  getInitialState() {
    return { showMenu: false};
  },
  handleMenuClick() {
    this.setState({ showMenu: !this.state.showMenu });
  },
  readFromAPI(url, successFunction) {
    Reqwest({
      url: url,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: successFunction,
      error(error) {
        console.log(url, error['response']);
        location = '/';
      }
    });
  },
  render() {
    let menu = this.state.showMenu ? 'show-menu' : 'hide-menu';

    return (
      <div id='app' className={menu}>
        <Menu sendMenuClick={this.handleMenuClick} />
        <div id='content'>
          <RouteHandler origin={this.props.origin} readFromAPI={this.readFromAPI} />
        </div>
      </div>
    );
  }
});
