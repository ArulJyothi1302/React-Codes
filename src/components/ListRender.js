import React from 'react'
function Prod(){
    const products=['Laptop','Mobile','Air Conditioner','BackPack']
    const prodList=products.map(prod=><h2>{prod}</h2>)
    return(
        // <div>
        // {/* <div><h2>Products:{products[0]}</h2></div>
        // <div><h2>Products:{products[1]}</h2></div>
        // <div><h2>Products:{products[2]}</h2></div>
        // <div><h2>Products:{products[3]}</h2></div> */}


        // </div>
        <div>
            <hr/>
            Products
        {prodList}
       
        </div>
    )
} 
export default Prod;