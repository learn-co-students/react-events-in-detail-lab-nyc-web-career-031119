// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {
  findCoor = (blah) => {

    this.props.onReceiveCoordinates([blah.clientX, blah.clientY])
  }

  render () {
    return (
      <button onClick={this.findCoor}>Coor</button>
    )
  }
}


export default CoordinatesButton
