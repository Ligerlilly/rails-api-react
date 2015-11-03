import React from 'react';
import Router from 'react-router';
import createFragment from 'react-addons-create-fragment'
import {Link} from 'react-router';
var  SignOut = require('./SignOut.jsx');
var  SignIn = require('./SignIn.jsx');

export default React.createClass({
  handleSignOutLink() {
    sessionStorage.setItem('jwt', '');
    location = '/';
  },
  render() {
    var login
    if (this.props.signedIn) {
      login = <SignOut onClick={this.handleSignOutLink} />
    } else {
      login = <SignIn origin={this.props.origin} />
    }
    return (
       <div id="menu">
        <span id="menu-link" onClick={this.props.sendMenuClick}><span></span></span>
        <div id="menu-list">
          <div className="pure-menu pure-menu-open">
            <span className="pure-menu-heading">Blabber</span>
            <ul>
              <li><Link to="/">Blabs</Link></li>
              <li><Link to="/about">About</Link></li>
              {login}




            </ul>
          </div>
        </div>
      </div>
    );
  }
});
