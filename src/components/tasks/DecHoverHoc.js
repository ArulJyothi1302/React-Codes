import React from 'react';
import UpdComp from './DecParent';
class DecHover extends React.Component {
    render(){
        const {count,dec}=this.props
        return(
            <>
            <h1 onMouseOver={dec}>{this.props.name} Hovered {count} Times</h1>
            </>
        )
    }
}
export default UpdComp(DecHover)