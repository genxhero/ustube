import React, {useState} from 'react';
import $ from 'jquery';

const Register = props => {
    const [user, updateUser] = useState({username: "", email: "", password: "", passwordConfirm: ""})


    const handleChange = e => {
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
                        <h4>Username</h4>
                        <input className="session-field" name="username"/>
                        <h4>Email</h4>
                        <input className="session-field" name="email" />
                        <h4>Password</h4>
                        <input className="session-field" name="password"/>
                        <h4>Confirm Password</h4>
                        <input className="session-field" name="passwordConfirm" />
                        <input type="submit" className="session-button" />
                    </form>
            </div>
        </div>
        
    );
}

export default Register;