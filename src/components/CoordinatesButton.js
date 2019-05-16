// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component{
    getCoord =(e)=>{
        const xyArray=[e.clientX,e.clientY]
        // const yArray=[e.clientY]

        // console.log('clickin coord', xArray,yArray)

        return this.props.onReceiveCoordinates(xyArray)
        
    }

    render(){
        return <button onClick={(e)=>this.getCoord(e)}>
            coord
        </button>
    }
}
export default CoordinatesButton
