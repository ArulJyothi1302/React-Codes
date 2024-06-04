import React, { useState , useCallback} from 'react'
import Title from './Title'
import CountCb from './CountCb'
import ButtonCb from './ButtonCb'
const ParentCallback = () => {
    const [Age,setAge]=useState(22)
    const [salary,setSalary]=useState(50000)
    const incrementAge=useCallback(()=>{
        setAge(Age+1);
    },[Age])
    const incrementSalary=useCallback(()=>{
    setSalary(salary + 2000)
    },[salary])
  return (
    <div>
        <h1>Parent Component</h1>
        <Title/>
        <CountCb text ={'Age:'}Count={Age} />
        <ButtonCb click={incrementAge}>Age</ButtonCb>

        <CountCb text ={'Salary:'}Count={salary}></CountCb>
        <ButtonCb click={incrementSalary}>Salary</ButtonCb>

    </div>
  )
}

export default ParentCallback