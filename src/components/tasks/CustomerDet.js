import React, { useState } from "react";
import CustomerDetView from "./CustomerDetView";

function StudList(){
    const [names,setName]= useState('')
    const [dept,setDept]=useState('')
    const [detName,setDetName]=useState([]);
    const [detDept,setDetDept]=useState([]);
    function submit(){
        if(names && dept){
        // setDet((prevState)=> [...prevState,names,dept])
            setDetName((prevState)=> [...prevState,names])
            setDetDept((prevState)=> [...prevState,dept])
        
        setName('');
        setDept('')
        console.log(detName);
        }
    }
    return (
        <>
        <div>
            <input type="text" value={names} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Name"/>
            </div>
            <div>
            <input type="text" value={dept} onChange={(e)=>{setDept(e.target.value)}}placeholder="Enter Department"/>
            </div>
            <button onClick={submit}>Submit</button>
            <CustomerDetView name={detName} dept={detDept}/>
        </>
    )
}
export default StudList