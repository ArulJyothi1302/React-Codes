import React from 'react';
class Ternary extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        Login:false
    }
    }
    render(){
        return(
this.state.Login?<div><h1>Ternary Logged in</h1></div>:<div><h1>Ternary Not Logged in</h1></div>
        )
    }

}
export default Ternary;