import React, {useState} from 'react';

const Login = props => {

    const [credentials, updateCredentials] = useState({email: "", password: ""})

    return (
        <div className="session-form">
            <form>
                <input className="session-field" />
                <input className="session-field" />
                <input className="session-button" />
            </form>
         
        </div>
    );
}

export default Login;