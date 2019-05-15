import React, { Component } from 'react';

export default class CoordinatesButton extends React.Component {


    coords = (e) => {
        console.log(this)
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }

  

    render() {
        return <button onClick={this.coords}>lol</button>
    }
  
}