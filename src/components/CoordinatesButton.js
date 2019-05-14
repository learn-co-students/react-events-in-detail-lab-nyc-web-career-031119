import React, { Component } from 'react'

class CoordinatesButton extends Component {

  getEvent = e => {
    // debugger
     this.props.onReceiveCoordinates([e.clientX, e.clientY])
  };

  render() {
    return (
      <div>
        <button onClick={this.getEvent}>test2</button>
      </div>
    );
  }
}

export default CoordinatesButton

// onClick={
//   event => {
//    this.props.onReceivedCoordinates([event.clientX, event.clientY])
//   }
// }
