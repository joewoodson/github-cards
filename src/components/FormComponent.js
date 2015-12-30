'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

require('styles//Form.sass');

class FormComponent extends React.Component {
	handleSubmit(e) {
		e.preventDefault();
		var loginInput = ReactDOM.findDOMNode(this.refs.login);
		this.props.addCard(loginInput.value);
	}
  render() {
    return (
      <div className="form-component">
        <form onSubmit={this.handleSubmit.bind(this)}>
        	<input placeholder='github login' ref='login' />
        	<button>Add</button>
        </form>
      </div>
    );
  }
}

FormComponent.displayName = 'FormComponent';

// Uncomment properties you need
// FormComponent.propTypes = {};
// FormComponent.defaultProps = {};

export default FormComponent;
