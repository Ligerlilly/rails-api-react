import React from 'react';

export default class Form extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault;
    let content = this.refs.content.getDOMNode().value.trim();
    if (!content) { return; }
    if ( this.props.signedIn) {

      this.props.optimisticUpdate({ id: 'fake-id', content: content, user: this.props.current_user })
      this.props.writeBlabToAPI(JSON.stringify({ blab: {content: content } }));
      this.refs.content.value = '';
      this.refs.content.blur();
    }
    else {
      alert('Please sign in to blab!')
    }
  }
  render() {
    return (
      <form className='blabs-form pure-form' onSubmit={this.handleSubmit}>
        <input type='text' placeholder='Enter blab...' ref='content' />
        <button type='submit' className='pure-button pure-button-primary'>Blab</button>
      </form>
    );
  }

}
