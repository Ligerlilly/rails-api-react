import React from 'react';
import {Link} from 'react-router';
import Router from 'react-router';

export default React.createClass({
  render() {
    return (
      <li><span onClick={this.props.onClick}>Sign Out</span></li>
    );

  }
});
