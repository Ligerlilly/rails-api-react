
jest.dontMock('../layout/Menu.jsx');
describe('Menu', function() {
  let Menu = require('../layout/Menu.jsx');
  let TestUtils = require('react-addons-test-utils');
  let ReactDOM = require('react-dom');
  let React = require('react');


  it('renders the Login button if not logged in', function() {
    let page = TestUtils.renderIntoDocument(<Menu />);
    let a = TestUtils.findRenderedDOMComponentWithClass(page, 'sign-in');
    expect(ReactDOM.findDOMNode(a).textContent).toBe('Sign In');
  });

  it('renders the Account button if logged in', function() {
    let page = TestUtils.renderIntoDocument(<Menu signedIn={true} />);
    let span = TestUtils.findRenderedDOMComponentWithClass(page, 'sign-out');
    expect(ReactDOM.findDOMNode(span).textContent).toBe('Sign Out');
  });
});
