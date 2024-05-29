import React from 'react';
import UpdatedComp from './ParentHoc';
class CountHoc extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state={
    //         count:0
    //     }
    // }
    // over=()=>{
    //     this.setState(prestate=>{
    //        return {count: prestate.count+1};
    //     })
    // }
    render()
    {
        // const {count}=this.state
        const {count,inc}=this.props
    return (
        
        <div>
            <button onClick={inc}>Click {count} times</button>
        </div>
    )
}
}
export default UpdatedComp(CountHoc);