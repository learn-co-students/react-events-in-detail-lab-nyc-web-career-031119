import React, { Component } from 'react'

class DelayedButton extends Component {

  getEvent = e => {
    e.persist()
    setTimeout( () => {
      this.props.onDelayedClick(e)
    },
      this.props.delay
    )
  };

  render() {
    return (
      <div>
        <button onClick={this.getEvent} >test1</button>
      </div>
    );
  }
}

export default DelayedButton
