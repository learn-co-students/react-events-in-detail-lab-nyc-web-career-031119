// Code CoordinatesButton Component Here
import React, {Component} from 'react';


export default class CoordinatesButton extends Component{

 handleClick = (event) => {
   // console.log(this.props.onReceiveCoordinates)
   console.log('Clicked'); // prints 'click '
   const cords = [event.clientX, event.clientY]
   return this.props.onReceiveCoordinates(cords)

 }


 render(){

   return <button onClick={ this.handleClick }>Click</button>

 }


}
