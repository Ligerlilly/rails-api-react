import React from 'react';

module.exports = React.createClass({
  handleSubmit(e) {
    e.preventDefault;
    let content = this.refs.content.getDOMNode().value.trim();
    if (!content) { return; }
    if ( this.props.signedIn) {
      this.props.optimisticUpdate({ id: 'fake-id', content: content, user: this.props.current_user })
      this.props.writeBlabToAPI(JSON.stringify({ blab: {content: content } }));
      this.refs.content.getDOMNode.value = '';
      this.refs.content.getDOMNode.blur();
    }
    else {
      alert('Please sign in to blab!')
    }
  },
  render() {
    return (
      <form className='blabs-form pure-form' onSubmit={this.handleSubmit}>
        <input type='text' placeholder='Enter blab...' ref='content' />
        <button type='submit' className='pure-button pure-button-primary'>Blab</button>
      </form>
    );
  }
});
