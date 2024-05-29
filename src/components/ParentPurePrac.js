import React from 'react';
import Normal from './NormalClassComp';
import PureComponentPrac from './PureComponentD-14';
class ParentPure extends React.Component{
    constructor(props){
        super(props);
        this.state={
            customer:"Ganesh"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({customer:"Ganesh"})
        },2000)
    }
    render(){
        // console.log("...Parent")
        return(
            <div>
                <hr/>
                <h1>Parent</h1>
                <Normal customer={this.state.customer}/>
                <PureComponentPrac customer={this.state.customer}/>
            </div>
        )
    }
}
export default ParentPure
