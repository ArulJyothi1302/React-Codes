import React,{Component} from 'react';
class Reg extends React.Component {
    render(){
        // console.log("rEGULAR")
        return(<div>
            <h1>Hello {this.props.name}</h1>
        </div>)
    }
}
export default Reg;