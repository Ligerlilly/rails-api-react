import React from 'react';
import BlabsForm from '../blabs/Form.jsx';
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
    }.bind(this));
  },
  writeBlabToAPI(data) {
    this.props.writeToAPI('post', this.props.origin + '/blabs', data, (blab) => {
      let blabs = this.state.data;
      blabs.shift();
      blabs.unshift(blab);
      this.setState({ data: blabs });
    }.bind(this));
  },
  optimisticUpdate(blab) {
    let blabs = this.state.data;
    blabs.unshift(blab);
    this.setState({ data: blabs });
  },
  render() {
    return (
      <div className='blabs-view'>
        <BlabsForm writeBlabToAPI={this.writeBlabToAPI} optimisticUpdate={this.optimisticUpdate} currentUser={this.props.currentUser} signedIn={this.props.signedIn}/>
        <BlabsList data={this.state.data} />
      </div>
    );
  }
});
