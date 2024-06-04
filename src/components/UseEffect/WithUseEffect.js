import React,{useState,useEffect} from 'react'

function WithUseEffect() {
    const [count,setCount]=useState(0)
   const [name,setName]=useState('')
    useEffect(()=>{
        
        console.log("use-Effect updating document title");
        document.title=`You Clicked ${count} Times`
        },[count])
    return (
    <div>WithUseEffect
        <button onClick={()=>setCount(count+1)}>Click {count}</button>
        <input type="text" value= {name} onChange={e=>{setName(e.target.value)}}/>
    </div>
  )
}

export default WithUseEffect