import React from "react";

const IfElseTask =(props)=>{
    const{name}=props;
    
    let Attendance =true;
    let status;
   
    if(Attendance){
status=<div><h1>{name}You are Present </h1></div>
    }
    else{
        status=<div><h1>{name} You are Absent </h1></div>
  
    }
    return(
        <div><hr/>{status}</div>
    )
}

export default IfElseTask;