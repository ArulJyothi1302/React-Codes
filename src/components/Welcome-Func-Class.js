// Have to import the react library
import React from 'react';
// Function class component
function Welcome(props){
    return <div><h1>Welcome {props.name} To React Class</h1>
    <h2>Your OFF {props.off} is Claimed</h2>
</div>
}

export default Welcome