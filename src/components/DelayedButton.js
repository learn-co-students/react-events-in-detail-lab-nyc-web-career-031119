// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {

  render() {
    // console.log(this.props)
    // debugger
    // const runThisFn = (event) => {
    //   console.log(event)
    // }
    return (
      <button onClick={
        event => {
          event.persist()
          // event is defined by getting automically passed into event handler
          setTimeout(
            () => {
              this.props.onDelayedClick(event)
            },
            this.props.delay
          )
        }}
      >
        Delayed Button
      </button>
    )
  }
}

export default DelayedButton
