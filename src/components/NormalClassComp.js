import React from "react";
class Normal extends React.Component {
render(){
    console.log("...Normal")
    return(<div><h1>Normal Component<br/>{this.props.customer}</h1></div>)
}
}
export default Normal;