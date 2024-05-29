import React from 'react';
function TableCol(){
    const Prods=[];
    
    return (
       <>
        {
            Prods.map(prod =>(
            <React.Fragment key={prod.id}>
                <h1>Title.....</h1>
                <p>Lorem ipsum.....................</p>
                <p>{prod.title}</p>
                </React.Fragment>
                )
                )
         }
          

               
      
    
           
       {/* <td>Name</td>
       <td>Arul</td> */}
    </>


    )
      
}
export default TableCol;