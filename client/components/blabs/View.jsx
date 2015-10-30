import React from 'react';
import BlabsList from '../blabs/List.jsx';


module.exports = React.createClass({
  getInitialState() {
    return { data: [] };
  },
  componentDidMount() {
    this.readBlabsFromAPI();
  },
  readBlabsFromAPI() {
    this.props.readFromAPI(this.props.origin + '/blabs', (blabs) => {
      this.setState({ data: blabs});
    }).bind(this);
  },
  render() {
    return (
      <div className='blabs-view'>
        <BlabsList data={this.state.data} />
      </div>
    );
  }
});
