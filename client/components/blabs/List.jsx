import React from 'react';
import Blab from '../blabs/Blab.jsx';

module.exports = React.createClass({
  render() {
    var blabs = this.props.data.map((blab) => {
      return (
        <Blab key={blab.id} content={blab.content} author={blab.user.handle}/>
      );
    });

    return (
      <ul className='blabs-list'>
        {blabs}
      </ul>
    );
  }

});
