'use strict';

import React from 'react';
import Carousel from 'react-carousel';
import styles from '../global-styles';

var Application = React.createClass({

  render() {
    return (
      <div>
        <fieldset style={styles.fieldset}>
          <legend style={styles.legend}>Default</legend>

          <Carousel style={styles.component} />

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
