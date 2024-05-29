import React from 'react';

// class Frinput extends React.Component {
//    constructor(props) {
//     super(props);
//     this.inp=React.createRef()
//    }
    
//     render(){
//         return (
//             <div>
//                 <input  type="text"/>
//             </div>
//         )
//     }
// }
// export default Frinput;


// REF FORWARDING
const FrInit =React.forwardRef((props,ref)=>{
    return (
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
}) 
export default FrInit