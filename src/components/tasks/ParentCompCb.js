import React, { useCallback, useState } from 'react'
import Cart from './Cart'
import CountResetcb from './CountResetcb'
const ParCb=()=>{
    const [cart,setCart]=useState(0);
    const [count,setCount]=useState(0);
    const Additems=useCallback(()=>{
        setCart(cart+ 1);
    },[cart])
    const inc=useCallback(()=>{
        setCount(count+ 1);
    },[count])
    const dec= useCallback(()=>{
        setCount(count- 1);
    },[count])
    const reset=useCallback(()=>{
        setCount(0);
    },[count])
    return (
        <div>
            <CountResetcb  count={count} inc={inc} dec={dec} res={reset}/>

            <Cart  item={cart} additem={Additems}/>

        </div>
    )
}
export default ParCb
