import React from 'react';
import axios from 'axios';
import './PostPrac.css'
class PostFormData extends React.Component {
constructor(props){
    super(props)
    this.state={
        postid:'',
        name:'',
        username:'',
        email:'',
        address:'',
        posts:[]
    }

}
change=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}
submit=(e)=>{
    e.preventDefault()
    axios.post("https://jsonplaceholder.typicode.com/users",this.state)
    .then(response=>{
        console.log(response.data)
    })
    .catch(error=>{
        console.log(error)
    })
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response=>{
        console.log(response.data)
        this.setState({
            posts:response.data
        })
        
    })
    .catch(error=>{
        console.log(error)
    })
}

render(){
    const {postid,name,username,email,address}=this.state
    return(
        <div>
            <form action=""onSubmit={this.submit}>
            <div>
                    <input className='inputs' type="text" name="postid" value={postid} onChange={this.change}/>
                </div>
                <div>
                    <input  type="text" name="name" value={name} onChange={this.change}/>
                </div>

                <div>
                    <input className='inputs' type="text" name="username" value={username} onChange={this.change}/>
                </div>

                <div>
                    <input type="email" name="email" value={email} onChange={this.change}/>
                </div>
                <div>
                    <input className='inputs' type="text" name="address" value={address} onChange={this.change}/>
                </div>
            <button type="submit">Submit</button>

            </form>
        </div>
    )
}
}
export default PostFormData