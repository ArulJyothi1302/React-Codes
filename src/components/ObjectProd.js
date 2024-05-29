import React from 'react';

function ObjectList(){
    // const products=["Apple","HP","LENOVO"]
  
    const products=[{
        productId:11101,
        price:100000,
        Name:'HP Laptop'
    },{
        productId:11102,
        price:10000,
        Name:'MI 12'
    },{
        productId:11103,
        price:100000,
        Name:'Apple iPhone 15'
    }]
    const prodLists=products.map(prod=>
    
      <h2>{prod.productId}</h2>
    )
    return(
<div >Name{prodLists}</div>
    )
}
export default ObjectList