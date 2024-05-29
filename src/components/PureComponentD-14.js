import React,{PureComponent} from 'react';
class PureComponentPrac extends PureComponent {
render()
{
    // console.log('...render');
    return(
        <div>
            <hr/>
            <h1>PureComponent in React
               <br/> {this.props.customer}
            </h1>
        </div>
    )
}
}
export default PureComponentPrac;