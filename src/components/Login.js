import React from "react";
import './Login.css'
function Login(){
return (
    <div>
        <form>
            <fieldset>
                <div>
                    User-Email
                </div>
                <div>
                <input className="form-control" type="email" placeholder="Enter Email"></input>

                </div>
                <div>Password</div>
                <div>
                <input className="form-control" type="Password" placeholder="Enter Password"></input>
                </div>
                <button type="submit" className="btn btn-success">Login</button>
            </fieldset>
        </form>
    </div>
)
}
export default Login