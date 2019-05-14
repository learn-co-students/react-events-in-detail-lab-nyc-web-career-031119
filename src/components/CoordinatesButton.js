// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = (e) => {
    const coords = [e.clientX, e.clientY];
    return this.props.onReceiveCoordinates(coords)
  }

  render() {
    return (
      <button onClick={this.handleClick}>Coordinates Button</button>
    )
  }
}

export default CoordinatesButton;
