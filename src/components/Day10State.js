import React from "react";

class States extends React.Component {
constructor(props){
    super(props);
       this.state={
         info:"Welcome To Day2 Of React"

       }
    
}
Update(){
    this.setState({
        info:"Your Class is Over"
        
    });
    console.log("hi1");
}
    render(){
    return(
        <div>
            <h1>{this.state.info}</h1>
            <button onClick={()=>this.Update()}>See Updates</button>
        </div>
    )
}
}
export default States;