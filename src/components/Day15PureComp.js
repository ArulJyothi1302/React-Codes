import React,{PureComponent} from 'react';
class PureComp extends PureComponent{
    constructor(props){
        super(props)
    this.state={
        count:0
    }
    }
    onInc=()=>{
        this.setState({
            count:this.state.count+1
            // pure component rerenders only if any changes have been done 
            // otherwise it will not rerender
        })
    }
    render(){
        console.log("Pure")
        return(
            <div>
            <h1>Pure Component<br/>
            {this.state.count}</h1>
            <button onClick={this.onInc}>Inc</button>
            </div>
        )
    }
}
export default PureComp;