import React,{Component, PureComponent} from 'react';
import Reg from './RegularComponent';
import Pure from './PureComp';
class Parent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:"Arul"
        }
    }
    componentDidMount(){
       setInterval(()=>{
        this.setState(
            {name:"Arul"}
        )
       },4000)
    }
    render(){
        // console.log("...................parent.............")
            return(
                <div>ParentComponent
                    <Reg name={this.state.name}/>
                 <Pure name={this.state.name}/>
                </div>
            )
    }
}
export default Parent;