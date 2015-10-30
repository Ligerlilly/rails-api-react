import React from 'react';
import Reqwest from 'reqwest';
import BlabsView from '../blabs/View.jsx';

module.exports = React.createClass({
  getDefaultProps() {
    return { origin: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''};
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
    return (
      <div id='content'>
        <BlabsView origin={this.props.origin} readFromAPI={this.readFromAPI} />
      </div>
    );
  }
});
