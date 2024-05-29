import React,{ useState } from "react"
function UseState(){
    // hooks are just a simple function
    // useState(0) =>which is going to return  pair of values
    // {} => Normal Destructuring []=> array destructuring
    const [count,setCount]=useState(0)
    return(
        <div>
            { /*in onclick pass as an arrow function  */}
            <button onClick={()=>setCount(count+1)}>Click {count}</button>
        </div>
    )
}
export default UseState