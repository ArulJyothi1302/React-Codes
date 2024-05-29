import React from "react";
class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            content:"Hello",
            para1:"Welcome To FullStack Course",
            Content2:"Take Test Daily",
            para2:"Thanks For Attending the class"
        }
    }
    head(){
        this.setState(
            {
                content:"Students"

            })
    }
para(){
    this.setState(
        {
            para1:"This Will make you Pro in Fullstack"
        }
    )
}
headandp(){
    this.setState({
        Content2:"Practise makes a man Perfect",
        para2:"Attend Daily Claases Without Leave"
    })
}
change(){
    this.setState({
        content:"Thanks Guys",
        Content2:"Take Test Without Fail",
        para1:"Do Daily Tasks and Be Consistent",
        para2:"Please Dont Miss The Class"
    }
);
}
render(){
    return(
        <div>
        <div><h1>{this.state.content}</h1></div>
        <div><p>{this.state.para1}</p></div>
        <div><h2>{this.state.Content2}</h2></div>
        <div><p>{this.state.para2}</p></div>
        <button onClick={()=>this.head()}>Heading1</button>
        <button onClick={()=>this.para()}>parachange</button>
        <button onClick={()=>this.headandp()}>Heading2 and para2</button>
        <button onClick={()=>this.change()}>All</button>
        </div>
    )
}
}
export default Task 