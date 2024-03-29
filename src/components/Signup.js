import React, {useState} from 'react';
import { submitSignup } from '../redux/actionCreators';
import { connect } from 'react-redux' ;
import { useNavigate } from 'react-router-dom';


export function Signup(props){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState({
       username: "",
       password: "",
       email: ""
    });
    const navigate = useNavigate()

    

    const startSignupProccess = () => {
        
        if (!validateSignupForm()) {
           props.submitSignup({ username, password, email})
           navigate("/")

        }
   }

   const validateSignupForm = (event) => {
  
       let hasError = false;
       let newError = { 
            username : "",
            password : "",
            email: ""
       }
        if (username.length <= 0 )  {
            newError.username = "Username can not be empty";
            hasError = true;
        }
        if (password.length <= 0) {
            newError.password = "Password can not be empty";
            hasError = true;
        }
        if (email.length <= 0) {
            newError.email = "Email can not be empty";
            hasError = true;
        }
       
        setError(newError);

        return hasError;
    }




    
    
        return <div className="base-container" >
        <div className="header">Signup</div>
            <div className="content">
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input value={username} type="text" name="username" onInput={(event) => setUsername(event.target.value)} placeholder="username"/>
                        {error.username.length > 0 ? <div>{error.username}</div> : null}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" value={email} name="email" onInput={(event) => setEmail(event.target.value)} placeholder="email"/>
                        {error.password.length > 0 ? <div>{error.email}</div> : null}
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={password} onInput={(event) => setPassword(event.target.value)} placeholder="password"/>
                        {error.password.length > 0 ? <div>{error.password}</div> : null}
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn" onClick={startSignupProccess}>Signup</button>
            </div>
        </div>
    


}


export default connect(null, { submitSignup })(Signup)