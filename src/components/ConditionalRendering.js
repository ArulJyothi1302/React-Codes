import React from 'react';

class IfElse extends React.Component {
constructor(props){
    super(props)
    this.state={
        // Login:false,
        Holiday:true
        // Login:false
    }
}

    render(){
        
        // method1
//         if(this.state.Login){
//     return(<div>
//         <h1>Hello You Have Logged in</h1>
//     </div>)
// }
// else{
//     return(
//         <div><h1>Not Login</h1></div>
//     )
// }
// method2
let Leave;
let Login;
if(this.state.Holiday){
Leave=<div><h3>Today Is Holiday</h3></div>
}
else{
    Leave=<div><h3>Today Is WorkingDay</h3></div>
}

return( <div>
   <h3>{Leave}</h3>
  
</div>
)
    }

}
export default IfElse;