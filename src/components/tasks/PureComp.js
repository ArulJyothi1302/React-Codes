import React,{PureComponent} from 'react';
class Pure extends React.PureComponent {
render(){
    // console.log("PUUUUURE")
    return(
        <div>Pure Component
            <h1>Hi {this.props.name}</h1>
        </div>
    )
}
}
export default Pure;