import React,{useState} from 'react';
import { Memo } from './Day15Child';
const ParentMemo=()=>{
const [Count,setCount]=useState(0);
const [Name,setName]=useState('Student');
console.log("parent");
return(
    <div>
        <h1>Before Memo<br/>
        Parent Component
        </h1>
        <button onClick={()=>setCount(Count+1)}>Click-Count</button>
        <div>
        <button onClick={()=>setName("Student1")}>Click-Name</button>
        </div>
        <h2>{Count}</h2>
   <Memo name={Name}/>


    </div>
)
}
export default ParentMemo
