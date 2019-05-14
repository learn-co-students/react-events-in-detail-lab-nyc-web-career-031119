import React from 'react';

class CoordinatesButton extends React.Component {

  render(){
    return <button type="button" onClick={this.props.onReceiveCoordinates}>Coordinates Button!</button>
  }
};

export default CoordinatesButton;
