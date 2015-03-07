'use strict';

import React from 'react';

const defaultStyle = {
  backgroundColor: 'white',
  borderColor: 'black',
  borderStyle: 'solid',
  borderWidth: 1,
  height: 200,
  width: 150
};

export default React.createClass({

  displayName: 'Card',

  render() {
    var { style, ...other } = this.props;
    let cardStyle = Object.assign({}, style, defaultStyle);

    return (
      <div style={cardStyle} {...other}></div>
    );
  }
});
