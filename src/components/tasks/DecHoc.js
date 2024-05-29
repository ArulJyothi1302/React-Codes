import React from "react";
import UpdComp from "./DecParent";
class DecBtn extends React.Component {
render(){

    const {count,dec}=this.props;
    return(
        <button onClick={dec}>Clicked {count} Times</button>
    )

}
}
export default UpdComp( DecBtn)