import React, {useState} from 'react';

const Register = props => {
    const [user, updateUser] = useState({username: "", email: "", password: "", passwordConfirm: ""})
    
    return (
        <div className="session-form">
            <h1>Register</h1>
                <input className="session-field" />
                <input className="session-field" />
                <input className="session-field" />
                <input className="session-field" />
                <input type="submit" className="session-button" />
        </div>
    );
}

export default Register;