import React from 'react'

const ButtonCb = ({click}) => {
  console.log("Button");
  return (
    <div>
       
        <button onClick={click}>Click</button>
    </div>
  )
}

export default React.memo(ButtonCb)