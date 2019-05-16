// Code CoordinatesButton Component Here
import React, {Component} from 'react'
export default class CoordinatesButton extends Component{
  handleClick = e => {
    e.persist();
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
    // console.log(e.clientX)
  }
  render() {
    return <button onClick={this.handleClick}>Coordinates</button>
  }
}
