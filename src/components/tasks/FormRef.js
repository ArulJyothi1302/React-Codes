import React from 'react';
class Form extends React.Component {
constructor(props) {
    super(props);
    this.FirstName=React.createRef();
    this.LastName=React.createRef();
    this.Email=React.createRef();
    this.password=React.createRef();
    this.confirmPassword=React.createRef();
}
componentDidMount(){
   this.FirstName.current.focus();
}
submit=()=>{
    console.log(this.FirstName.current.value);
    console.log(this.LastName.current.value)

    console.log(this.Email.current.value)
    console.log(this.password.current.value)
    console.log(this.confirmPassword.current.value)

}
render(){
    return(
<div>
    
        <div>
        <label>FirstName:</label>
        </div>
        <div>
        <input type="text" ref={this.FirstName}/>
        </div>
        <div>
        <label>LastName:</label>
        </div>
        <div>
        <input type="text" ref={this.LastName}/>
        </div> 
        <div>
        <label>Email:</label>
        </div>
        <div>
        <input type="email" ref={this.Email}/>
        </div>
      
        <div>
        <label>Password</label>
        </div>
        <div>
        <input type="password" ref={this.password}/>
        </div>
        <div>
        <label>Confirm Password</label>
        </div>
        <div>
        <input type="password" ref={this.confirmPassword}/>
        </div>
<div>
    <button onClick={this.submit}>Submit</button>
</div>
   
</div>

    )
}

}
export default Form;