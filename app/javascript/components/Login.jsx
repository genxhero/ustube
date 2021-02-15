import React, {useState} from 'react';

const Login = props => {

    const [credentials, updateCredentials] = useState({email: "", password: ""})

    return (
        <div className="session-form">
            <input className="session-field" />
            <input className="session-field" />
            <button className="session-button" />
        </div>
    );
}

export default Login;