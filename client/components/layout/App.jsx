import React from 'react';
import Reqwest from 'reqwest';
import BlabsView from '../blabs/View.jsx';
import Menu from './Menu.jsx';
import Router from 'react-router';
import Uri from 'jsuri';

let RouteHandler = Router.RouteHandler;


module.exports = React.createClass({
  getDefaultProps() {
    return { origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''};
  },
  getInitialState() {
    return { showMenu: false, signedIn: false, currentUser: {handle: '' } };
  },
  componentWillMount() {
    var jwt = new Uri(location.search).getQueryParamValue('jwt');
    if (!!jwt) { sessionStorage.setItem('jwt', jwt); }
  },
  componentDidMount() {
    if (!!sessionStorage.getItem('jwt')) { this.currentUserFromAPI(); }
  },
  currentUserFromAPI() {
    this.readFromAPI(this.props.origin + '/current_user', (user) => {
      this.setState({signedIn: true, current_user: user});
    }.bind(this));
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
      headers: { 'Authorization': sessionStorage.getItem('jwt') },
      success: successFunction,
      error(error) {
        console.log(url, error['response']);
        location = '/';
      }
    });
  },
  writeToAPI(method, url, data, successFunction) {
    Reqwest({
      url: url,
      data: data,
      type: 'json',
      method: method,
      contentType: 'application/json',
      headers: { 'Authorization': sessionStorage.getItem('jwt') },
      success: successFunction,
      error: (error) => {
        console.error(url, error['response']);
        location = '/';
      }
    });
  },
  render() {
    let menu = this.state.showMenu ? 'show-menu' : 'hide-menu';

    return (
      <div id='app' className={menu}>
        <Menu origin={this.props.origin} sendMenuClick={this.handleMenuClick} signedIn={this.state.signedIn}/>
        <div id='content'>
          <RouteHandler origin={this.props.origin} readFromAPI={this.readFromAPI} writeToAPI={this.writeToAPI} currentUser={this.state.currentUser}  signedIn={this.state.signedIn}/>
        </div>
      </div>
    );
  }
});
