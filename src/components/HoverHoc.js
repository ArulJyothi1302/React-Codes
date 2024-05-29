import React from "react";
import UpdatedComp from "./ParentHoc";
class Hover extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state={
    //         count:0
    //     }
    // }
    // over=()=>{
    //     this.setState(prestate=>{
    //        return {count: prestate.count+1};
    //     })
    // }
render(){
    // const {count}=this.state;
    const {count ,inc}=this.props
    return (
        <div>
            <h1 onMouseOver= {inc}>{this.props.name}  Hover {count} times</h1>
        </div>
    )
}
}
export default UpdatedComp( Hover);