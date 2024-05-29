import React from "react";
const UpdComp= MainComp =>{
    class Dec extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                count:0
            }
        }
        dec=()=>{
            this.setState(preState=>{
                return {
                    count:preState.count-1
                }
            });
        }
        render(){
            return <MainComp count={this.state.count} dec={this.dec}/>
        }
    }
    return Dec;
}
export default UpdComp;