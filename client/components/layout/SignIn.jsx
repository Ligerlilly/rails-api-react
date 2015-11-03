import React from 'react';
import {Link} from 'react-router';
import Router from 'react-router';

export default React.createClass({
  render() {
    return (
      <li><a href={this.props.origin + '/request_token'}>Sign In</a></li>
    );

  }
});
