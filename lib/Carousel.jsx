'use strict';

import React from 'react';

const nullFunc = function() {};
const styles = {
  carousel: {
    overflow: 'hidden',
    position: 'relative'
  },
  list: {

  },
  item: {
    float: 'left'
  }
}

export default React.createClass({

  displayName: 'Carousel',

  propTypes: {
    onNext: React.PropTypes.func,
    onPrevious: React.PropTypes.func,
  },

  getDefaultProps() {
    return {
      onNext: nullFunc,
      onPrevious: nullFunc
    }
  },

  render() {

    let { style, children, ...other } = this.props;
    let carouselStyle = {
      ...style,
      ...styles.carousel
    };
    let newChildren = children.map((child, i) => {
      return React.cloneElement(child, {
        style: {
          ...child.props.style,
          ...styles.item,
          marginLeft: i ? 20 : 0
        }
      });
    });

    return (
      <div style={carouselStyle} {...other}>
        <div>
          {newChildren}
        </div>
      </div>
    );
  }
});
