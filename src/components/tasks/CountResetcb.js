import React from 'react'

const CountResetcb=({count,inc,dec,res})=> {
    console.log("render",{count})
  return (
    <div>
        <h3>Count:{count}</h3>
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
        <button onClick={res}>Reset</button>

    </div>
  )
}

export default React.memo(CountResetcb)