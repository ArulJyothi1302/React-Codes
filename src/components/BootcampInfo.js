import React from "react";

class BootcampInfo extends React.Component{
    render(){
        return(
            <div>              
                <h5>BootCamp for {this.props.course} starts on {this.props.day},{this.props.day1} and{this.props.day2}</h5>
            </div>
        )
    }
}
export default BootcampInfo;