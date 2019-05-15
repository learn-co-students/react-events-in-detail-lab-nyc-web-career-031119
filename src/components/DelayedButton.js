import React, { Component } from 'react';

export default class DelayedButton extends React.Component {

    constructor(props) {
        super(props)
        console.log(this.props)
      
    }

    

    handleClick = (e) => {
        e.persist()
        const ev = e;
        setTimeout(() => {this.props.onDelayedClick(ev)}, this.props.delay);
      }

  

    render() {
        return <button onClick={this.handleClick}>rofl</button>
    }
  

}

