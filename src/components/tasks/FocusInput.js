import React, { Component } from 'react'
import InputRef from './InputRef'

class FocusInput extends Component {
    constructor(props){
        super(props)
        this.focus=React.createRef()
    }
    foc=()=>{
        this.focus.current.focusMethod();
    }
  render() {
    return (
  <div>
    <InputRef ref={this.focus}/>
    <button onClick={this.foc} >Focus</button>
  </div>
    )
  }
}

export default FocusInput