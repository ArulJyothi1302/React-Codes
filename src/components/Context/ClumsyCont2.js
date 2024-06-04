import React,{useContext} from 'react'
import ClumsyCont3 from './ClumsyCont3'

import { ClumsyContext,ChannelContext } from '../../App'
function ClumsyCont2() {
    const user= useContext(ClumsyContext)
    const channel =useContext(ChannelContext)
  return (
    <div>
        Hey {user} lets Play {channel}
        {/* <ClumsyCont3/> */}
    </div>
  )
}

export default ClumsyCont2