import React from 'react';

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

    let gutterWidth = 20;
    let totalItemWidth = (children.length - 1) * gutterWidth + style.padding;
    let newChildren = React.Children.map(children, (child, i) => {
      totalItemWidth += child.props.style.width || 0;
      return React.cloneElement(child, {
        style: {
          ...child.props.style,
          ...styles.item,
          marginLeft: i ? gutterWidth : 0
        }
      });
    });
    console.log(totalItemWidth);

    return (
      <div style={carouselStyle} {...other}>
        <div style={{ width: totalItemWidth, ...styles.list }}>
          {newChildren}
        </div>
      </div>
    );
  }
});

const nullFunc = function() {};

const StyleSheet = { create: function (e) { return e; } };

let styles = StyleSheet.create({
  carousel: {
    overflow: 'auto',
    position: 'relative'
  },
  list: {
    flexDirection: 'row'
  },
  item: {}
});
