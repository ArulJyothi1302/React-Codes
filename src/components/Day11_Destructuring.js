import React from 'react'; 

// const Greet =({name,sports}) =>{ 
// 	// Destructuring 
	
// 	return ( 
// 		<div> 
// 			<div > 
// 			<h3>Hello {name} Do you play {sports} </h3> 
// 			</div> 
// 		</div> 
// 		) 
// } 

const Greet =(props)=>{
    const{name,sports}=props;
    return(
        <div><h1>Hello i'm {name} and I play {sports}</h1></div>
    )
}

// class Wel extends React.Component {
// render(){
//     const{name,sports}=this.props;
//     return (
//         <div><h1>Hi {name} lets play {sports}</h1></div>
//     )
// }
// }

export default Greet; 
// export default Wel;
