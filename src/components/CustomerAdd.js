import React, { useState } from 'react';
import CustomerView from './CustomerView';
function CustAdd(){
    const [input,setInput] = useState('')
    const [customer,setCustomer]=useState([])
    function Add(){
        if(input){
        setCustomer((prevState)=>[...prevState,input])
        setInput('')  
        console.log(customer)
        }
    }
    return(<div>
        <h1>Hello</h1>
        <input type="text" value={input} onChange={(f)=>{setInput(f.target.value)}}/>
        <button onClick={Add}>Add</button>
        <CustomerView customer={customer}/>
    </div>)
}
export default CustAdd;