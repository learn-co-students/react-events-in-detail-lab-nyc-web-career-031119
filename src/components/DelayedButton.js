// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {
  constructor(props) {
    super(props)

  }

  handleClick = (e) => {
    const ev = e;
    setTimeout(() => {this.props.onDelayedClick(ev)}, this.props.delay);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Delayed Button</button>
    )
  }
}

export default DelayedButton;
