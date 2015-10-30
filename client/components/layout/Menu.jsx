import React from 'react';
import Router from 'react-router';
let Link = Router.Link;

module.exports = React.createClass({
  render() {
    return (
      <div id='menu'>
        <span id='menu-link' onClick={this.props.sendMenuClick}><span></span></span>
        <div id='menu-list'>
          <div className='pure-menu pure-menu-open'>
            <span className='pure-menu-heading'>Blabber</span>
            <ul>
              <li><Link to='blabs'>Blabs</Link></li>
              <li><Link to="about">About</Link></li>
           </ul>
         </div>
       </div>
     </div>

    );
  }
});
