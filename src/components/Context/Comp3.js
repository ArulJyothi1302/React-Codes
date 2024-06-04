import React from 'react' 
import { UserContext } from '../../App'
function Comp3() {
  return (
<div>
 
   <UserContext.Consumer>
    {
       user=>{
        return <div>
            <h1>Hello   {user}</h1>
        </div>
       }
    }
   </UserContext.Consumer>
</div>
   
  )
}

export default Comp3