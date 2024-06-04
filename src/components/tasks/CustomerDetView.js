import React from 'react'

function CustomerDetView({name,dept}) {
  return (
    <div>

<h1>Student Details</h1>

  <ul style={{listStyle:"none"}}>
    {name.map((name,index)=> <li key={index}><h3>{name} is in {dept[index]}  department </h3></li>)}
       
  
  </ul>
    </div>
  )
}

export default CustomerDetView