'use strict';

import React from 'react';

require('styles//Card.sass');
var $ = require('jquery');

class CardComponent extends React.Component {
	constructor() {
	  super();
	  this.state = {};
	 }
  componentDidMount () {
  	var component = this;
  	$.get('https://api.github.com/users/' + this.props.login, function(data) {
      component.setState(data);
  	})
  }
  render() {
    return (
      <div className="card-component">
        <img src={this.state.avatar_url} width="80" />
        <h3>{this.state.name}</h3>
        <hr/>
      </div>
    );
  }
}

CardComponent.displayName = 'CardComponent';

// Uncomment properties you need
// CardComponent.propTypes = {};
// CardComponent.defaultProps = {};

export default CardComponent;
