import React from 'react';
import BlabsList from '../blabs/List.jsx';


module.exports = React.createClass({
  getInitialState() {
    return { data: [] };
  },
  componentDidMount() {
    this.setState({ data: [{ id: 2, content: 'another fake blab'}, {id: 1, content: 'this is a fake blab'}]});
  },
  render() {
    return (
      <div className='blabs-view'>
        <BlabsList data={this.state.data} />
      </div>
    );
  }
});
