import React from 'react';
import axios from 'axios';
class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            userId:'',
            title:'',
            body:''
        }
        }
        changeHandler=(e)=>{
            this.setState({[e.target.name]:e.target.value})
        }
        submitHandler=(e)=>{
            e.preventDefault()
            console.log(this.state)
            axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
            // once the req completed we can get either we get the response or will get the error
            .then(response=>{
                console.log(response.data)
            })
            .catch(error=>{
                console.log(error)
            })

        }
render(){

    const {userId, title, body}=this.state;
    return(
       
        <div>
            <form action=""onSubmit={this.submitHandler}>
                <div className='id'>
                    <input type="text"name="userId"
                     value={userId}
                      onChange={this.changeHandler}/>
                </div>
                <div className='name'>
                   <input type="text" name="title"
                   value={title}
                    onChange={this.changeHandler}/>
                </div>
                <div className='pass'>
                   <input type="text"name="body"
                    value={body}
                    onChange={this.changeHandler}/>
                </div>
                <button type="submit">Submit</button>
            </form>
            <div>
                {}
            </div>
        </div>
    )
}
}
export default PostForm;