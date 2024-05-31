import React from 'react';
import CompB from './CompB';
function CompA(props){
    return(
        <div>
         <CompB/>
         {props.value}
        </div>
    )
}
export default CompA