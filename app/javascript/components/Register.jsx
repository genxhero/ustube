import React, {useState} from 'react';

const Register = props => {
    const [user, updateUser] = useState({username: "", email: "", password: "", passwordConfirm: ""})


    const handleChange = e => {

    }

    return (
        <div className="session-form">
            <h1>Register</h1>
                <form>
                    <input className="session-field" />
                    <input className="session-field" />
                    <input className="session-field" />
                    <input className="session-field" />
                    <input type="submit" className="session-button" />
                </form>
        </div>
    );
}

export default Register;