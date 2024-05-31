import React,{useState} from 'react';
function CustList(){
    const [input,setInput]=useState("")
   
    function Add(){
      console.log({input})
    }
    return (
        <div>
            <h1>Customer List</h1>
            <input type="text" value={input} onChange ={(e)=>{
               setInput(e.target.value)
             }} />
            <button onClick={Add}>Add</button>
        </div>
    )
}
export default CustList