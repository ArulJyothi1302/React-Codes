import React from 'react';
const UpdatedComp=OriginalComponent=>{

class ParentHoc extends React.Component {
constructor(props) {
super(props);
this.state={
    count:0
}
}
incre=()=>{
    this.setState(preState=>{
        return {count:preState.count+1}
    })
}
render(){
return <OriginalComponent name="Arul" count={this.state.count} inc={this.incre}/>
}
}
return ParentHoc
}
export default UpdatedComp;