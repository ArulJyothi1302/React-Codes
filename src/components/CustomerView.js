import React from 'react'

function CustomerView({customer}) {
  return (
    <div>
        <h1>Customer List here</h1>
        <ul style = {{listStyle:"none"}}>
            {customer.map((cust,index)=><li key={index}>{cust}</li>)}
        </ul>
    </div>
  )
}

export default CustomerView