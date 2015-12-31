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
  	$.get('http://netrunnerdb.com/api/card/' + this.props.login, function(data) {
      data = $.parseJSON(data);
      component.setState(data[0]);
  	})
  }
  render() {
    return (
      <div className="card-component">
        <img src={'http://netrunnerdb.com' + this.state.imagesrc} width="100" />
        <h3>{this.state.title}</h3>
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
