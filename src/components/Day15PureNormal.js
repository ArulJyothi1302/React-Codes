import React,{Component} from 'react';
class NormbefPure extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }

    onInc=()=>{
        this.setState({count:0});
    }
    render(){
        console.log("Normal");
        return(
            <div><h1>Normal<br/>
            {this.state.count}
            <br/>
            <button onClick={this.onInc}>Inc</button>
            </h1></div>
        )
    }
}
export default NormbefPure