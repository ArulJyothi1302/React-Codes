import React from 'react'
import { ClumsyContext,ChannelContext } from '../../App'
function ClumsyCont3() {
  return (
    <div>
        {/* <h3>Hello This is Clumsy Context</h3>
        <h2>Using Clumsy Context1 here</h2>
        <hr/> */}
        {/* Single context */}
        {/* <ClumsyContext.Consumer>
            {
                (user,sport)=>{
                    return(
                        <div>
                            Welcome to Clumsy {user} lets play{sport}
                        </div>
                    )
                }
            }
        </ClumsyContext.Consumer> */}
        {/* Multiple Context */}
        <ClumsyContext.Consumer>
            {
            pers=>{
                return(
                <ChannelContext.Consumer>
                    {
                       
                       sport=>{
                        return(
                            <div>
                                <h1>
                                    Hey {pers} Do you Play {sport}
                                </h1>
                                </div>
                        )
                       }
                    }
                </ChannelContext.Consumer>
   ) }
        }
        </ClumsyContext.Consumer>
    </div>
  )
}

export default ClumsyCont3