import React from 'react';
export const Child=({name})=>{
    console.log("Child Render");
    return(
        <div>
            <h1>Child Component
                {name}
            </h1>
        </div>
    )

}
export const Memo=React.memo(Child)