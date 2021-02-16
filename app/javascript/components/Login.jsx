import React, {useState} from 'react';

const Login = props => {

    const [credentials, updateCredentials] = useState({email: "", password: ""})

     const handleChange = e => {
        updateUser( prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <div className="session-form">
            <h1>Login</h1>
            <form onChange={handleChange}>
                <input className="session-field" name="email"/>
                <input className="session-field" name="password"/>
                <input type="submit" className="session-button" />
            </form>
        </div>
    );
}

export default Login;