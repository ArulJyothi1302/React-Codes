import React,{useState} from 'react';
import {Memotize} from './MemoChild';
const MemoParent=()=>{
    const [Count,setCount]=useState(0);
    const [Name,setName]=useState("Aruls");
    console.log("Parent here")

    return (
        <div>

            <h1>Paren Memo</h1>
            <h2>{Count}</h2>
            <button onClick={()=>setCount(Count+1)}>Inc</button>
            <button onClick={()=>setName("Arul")}>Name</button>
            < Memotize name={Name}/>
        </div>
    )
}
export default MemoParent;