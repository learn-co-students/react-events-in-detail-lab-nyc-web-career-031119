import React from 'react';
import ReactDOM from 'react-dom';

// These must be defined for code to work in browser
import CoordinatesButton from './components/CoordinatesButton';
import DelayedButton from './components/DelayedButton';

//a handler function for when the CoordinatesButton component btn is clicked
const handleClickCoordinates = (coordinates) => console.log(coordinates);


ReactDOM.render(
  <div>
    <CoordinatesButton onReceiveCoordinates={ handleClickCoordinates } />
    <DelayedButton onDelayedClick={ event => console.log(event) } delay={1500} />
  </div>,
  document.getElementById('global')
);
