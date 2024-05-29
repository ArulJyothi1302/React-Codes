import React from 'react';
import axios from 'axios';
class Getdata extends React.Component {
constructor(props) {
super(props)
this.state={
    posts:[],
    error:"Unable to catch the data"
}
}
componentDidMount(){
axios.get("https://jsonplaceholder.typicode.com/post")
.then(response=>{
    console.log(response)
    this.setState({
        posts:response.data
    })
})
.catch(error=>{
    console.log(error)
    this.setState({
        error:"Unable to fetch data"
    })
})
}

render(){
    const {posts , error}= this.state
    return(
        <div>
            <h1>GetMethod</h1>
    {
        posts.length ?
    posts.map(post=>{
        return(
    <div key={post.id}>
        <h3>User Id:{post.id}</h3>

        <h3>Title:</h3>
        <p>{post.title}</p>
        <h3>Body:</h3>
        <p>{post.body}</p>
        <hr/>
        </div>)} ):null
    
}
{
    error ? 
    <div>{error}</div>:null
}

           
        </div>
    )
}
}
export default Getdata
// response,request