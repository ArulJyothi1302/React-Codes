import React,{useState} from 'react';
function UseStateHook(){
    const [count,setCount]=useState(0)
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount(count+1)}>Inc</button>
            <button onClick={()=>setCount(count-1)}>Dec</button>
        </div>
    )
}
export default UseStateHook