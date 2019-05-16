// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component{

    handleClick = (e)=>{
        e.persist()
        setTimeout(()=>{
            this.props.onDelayedClick(e),this.props.delay
        })
        
        
    }

    render(){
        return<button onClick={(e)=>this.handleClick(e)}>
            DelayedButton
        </button>
    }
}
export default DelayedButton