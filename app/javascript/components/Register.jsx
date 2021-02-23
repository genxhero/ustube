import React, {useState} from 'react';
import $ from 'jquery';

const Register = props => {
    const [user, updateUser] = useState({username: "", email: "", password: "", passwordConfirm: ""})


    const handleChange = e => {
        debugger;

        updateUser( prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        
    }

    console.log(user)
    return (
        <div className="session-page">
            <div className="session-form-container">
                <h1>Register</h1>
                    <form className="session-form" onChange={handleChange} onSubmit={handleSubmit}>
                        <span>Username</span>
                        <input className="session-field" name="username"/>
                        <span>Email</span>
                        <input className="session-field" name="email" />
                        <span>Password</span>
                        <input className="session-field" name="password"/>
                        <span>Confirm Password</span>
                        <input className="session-field" name="passwordConfirm" />
                        <input type="submit" className="session-button" />
                    </form>
            </div>
        </div>
        
    );
}

export default Register;