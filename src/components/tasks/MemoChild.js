import React from 'react';
export function MemoChild({name}){
    console.log("Childdddd")
    return(<div>
        <h2>Child</h2>
        <h2>{name}</h2>
    </div>)
}
export const Memotize=React.memo(MemoChild);