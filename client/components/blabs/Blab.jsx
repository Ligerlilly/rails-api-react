import React from 'react';

module.exports = React.createClass({
  render() {
    return (
      <li className='blab'>
        <span className='blab-text'>{this.props.content}</span>
      </li>
    );
  }
});
