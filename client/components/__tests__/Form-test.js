jest.dontMock('../blabs/Form.jsx');


describe('Form', function() {
  let Form = require('../blabs/Form.jsx');
  let TestUtils = require('react-addons-test-utils');
  let React = require('react');
  Form.prototype.handleSubmit = jest.genMockFunction();

  it('calls function handleSubmit on form submit', function() {
    let form = TestUtils.renderIntoDocument(<Form />);
    let input = TestUtils.findRenderedDOMComponentWithTag(form, 'input');
    input.value = 'bob';
    expect(input.value).toBe('bob');
    TestUtils.Simulate.submit(input);
    expect(Form.prototype.handleSubmit).toBeCalled();

  });

});
