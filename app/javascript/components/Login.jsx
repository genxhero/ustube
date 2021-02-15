import React, {useState} from 'react';

const Login = props => {

    const [credentials, updateCredentials] = useState({email: "", password: ""})

    return (
        <div className="session-form">
            <h1>Login</h1>
            <form>
                <input className="session-field" />
                <input className="session-field" />
                <input type="submit" className="session-button" />
            </form>
        </div>
    );
}

export default Login;