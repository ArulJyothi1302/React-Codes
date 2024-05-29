import React from 'react';
import './Refs.css'
class Refs extends React.Component {
    constructor(props) {
        super(props);
        this.inputref=React.createRef();
    //    another method
        this.cbRef=null;
        this.setCbRef=  element=>{
            this.cbRef=element;
        }
    }
componentDidMount(){
   
    this.inputref.current.focus();
    console.log(this.inputref)
    // another method
     // if(this.cbRef){
    //     this.cbRef.focus();
    // }
}
clickHandler=()=>{
   alert(this.inputref.current.value);
}
render(){
    return(
        <div  >
            <input type="text" ref={this.inputref}/>
            {/* <input type="text" ref={this.setCbRef}/> */}
            <button onClick={this.clickHandler}>Click</button>
        </div>
    )
}

}
export default Refs;
