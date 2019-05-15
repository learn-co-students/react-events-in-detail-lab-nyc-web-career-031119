// Code DelayedButton Component Here
import React,{ Component } from 'react';
// import CoordinatesButton from './CoordinatesButton.js'

export default class DelayedButton extends Component {

  handleClick = (event)  => {
    setTimeout(() => {
      this.props.onDelayedClick(event)
      }, this.props.delay)


  }

  render() {
    return (
      <button onClick={this.handleClick}> </button>
    )
  }


}
