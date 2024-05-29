import React from 'react';
import Frinput from './Frinput';
class Frparent extends React.Component {
constructor(props) {
    super(props);
    this.inpfoc=React.createRef();
}
click=()=>{
    this.inpfoc.current.focus();
}
    render(){
    return(
        <>
        <Frinput ref={this.inpfoc}/>
        <button onClick={this.click}>Focus Input</button>
        </>
    )
}
}
export default Frparent;
