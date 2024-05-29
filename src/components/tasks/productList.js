import React from 'react';
// destructure in function body
// const Proditems=(props)=>{
//     const{items}=props;
//     return (
//         <div>
//             <h1>Items:{items}</h1>
//         </div>
//     )
// }
// function Proditems(props){
//     const{items}=props; 
//     return <div><h1>This is:{items}</h1></div>
// }
// destructure in function param
const Proditems=({items})=>{
 return <div><h1>Hey do you want {items}</h1></div>
}
export default Proditems;