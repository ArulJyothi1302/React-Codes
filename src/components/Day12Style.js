import React from 'react'

import './Style-d12.css';
// Day12
// Styles in React using Js libraries

function Styles(props){
    let className=props.heading1?'heading1':'';
    return(
        <div className={className}>
            <h1>Welcome</h1>
        </div>
    )
}
export default Styles;