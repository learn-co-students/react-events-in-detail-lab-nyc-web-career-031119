import React from 'react';
// setTimeout(function(){ alert("Hello"); }, 3000);
class DelayedButton extends React.Component {

  delayedClickHandler = (event) => {
    setTimeout(() => { this.props.onDelayedClick(event) }, this.props.delay);
  }

  render(){
    return <button type="button" onClick={this.delayedClickHandler}>Delayed Button!</button>
  }
};

export default DelayedButton;
