import React from 'react'

const CountCb = ({text,Count}) => {
  console.log("Count",text);
  return (
    <div>
        <h2>{text} {Count}</h2>
      
        
    </div>
  )
}

export default React.memo(CountCb)