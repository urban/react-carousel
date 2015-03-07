'use strict';

import React from 'react';
import Carousel from 'react-carousel';
import Card from './card';
import styles from '../global-styles';

const Application = React.createClass({

  render() {

    let cards = Array.from(5, n => { return (<Card />); });
    let style = {
      ...styles.component,
      padding: 20
    };

    return (
      <div>
        <fieldset style={styles.fieldset}>
          <legend style={styles.legend}>Default</legend>

          <Carousel style={style}>
            {cards}
          </Carousel>

        </fieldset>
      </div>
    );
  }
});

if (typeof window !== 'undefined') {
  React.render(
    <Application />,
    document.querySelector('#root')
  );
}

export default Application;
