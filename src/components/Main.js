require('normalize.css');
require('styles/App.css');

import React from 'react';
import Card from './CardComponent';
import Form from './FormComponent';

class AppComponent extends React.Component {
	constructor() {
	  super();
	  this.state = {logins: []};
	}
	addCard(loginToAdd) {
		this.setState({logins: this.state.logins.concat(loginToAdd)});
	}
  render() {
  	var cards = this.state.logins.map(function(login) {
  	  return (<Card login={login} />);
  	})
  	return (
  		<div>
  			<Form addCard={this.addCard.bind(this)} />
  			{cards}
  		</div>
  	)
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
