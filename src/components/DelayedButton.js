// Code DelayedButton Component Here
import React from 'react'

class Delayedbutton extends React.Component {
  delayed = (event) => {
    event.persist()
    setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
  }
  render () {
    return (
      <button onClick={this.delayed}>Delay</button>
    )
  }
}


export default Delayedbutton
