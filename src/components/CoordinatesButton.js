import React from 'react';

class CoordinatesButton extends React.Component{

  renderCoordinates = (e) => {
    const coords = [e.clientX, e.clientY];
    return this.props.onReceiveCoordinates(coords);
  };

  render(){
    return(
      <button onClick={this.renderCoordinates}>Show Coordinates</button>
    )
  }
};

export default CoordinatesButton;
