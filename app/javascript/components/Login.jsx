import React, {useState} from 'react';

const Login = props => {

    const [credentials, updateCredentials] = useState({email: "", password: ""})

     const handleChange = e => {
         // Since when do you need to use this persist function? 
        e.persist();
        updateUser( prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className="session-page">
            <div className="session-form-container">
                  <h1>Login</h1>
                  <form className="session-form" onChange={handleChange}>
                            <input className="session-field" name="email"/>
                            <input className="session-field" name="password"/>
                            <input type="submit" className="session-button" />
                    </form>    
            </div>
        </div>
      
    );
}

export default Login;