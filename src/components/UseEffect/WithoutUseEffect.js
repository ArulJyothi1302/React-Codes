import React from "react";

export default class WithoutUseEffect extends React.Component {
constructor(props){
    super(props);
    this.state={
        count:0,
        name:''
    }
}
componentDidMount(){
    document.title=`Clicked ${this.state.count} times`
}
componentDidUpdate(prevProps,prevState){
    if(prevState.count !== this.state.count){
    document.title=`Clicked ${this.state.count} times`
    console.log('Updating Document Title')
}
}
    render(){
    return(
        <>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Click {this.state.count} Times</button>
        <input type="text" value={this.state.name} onChange={e=>{this.setState({name:e.target.value})}}/>
       {/* To capyure the change we use onChange=((e-> event)=>e.target.value ) */}
        </>
    )
}
}