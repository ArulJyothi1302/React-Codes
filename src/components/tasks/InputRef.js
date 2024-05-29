import React, { Component } from 'react'

class InputRef extends Component {
    constructor(props){
        super( props)
        this.inputfocus=React.createRef()
    }
    focusMethod(){
        this.inputfocus.current.focus()
    }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputfocus}/>
      </div>
    )
  }
}

export default InputRef