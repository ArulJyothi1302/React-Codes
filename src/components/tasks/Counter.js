import React from "react";

class Count extends React.Component {
    constructor(){
        super()
        this.state={
            Counts:0
        }
    }

    Increase(){
        this.setState({
            Counts:
           this.state.Counts+1})
    }
    Decrease(){
        this.setState({Counts:this.state.Counts -1})
    }
render(){
    return(
        <div>
            <h1>Count:{this.state.Counts}</h1>
            <button onClick={()=>this.Increase()}>Increase</button>
            <button onClick={()=>this.Decrease()}>Decrease</button>

        </div>  
    )
}
}
export default Count