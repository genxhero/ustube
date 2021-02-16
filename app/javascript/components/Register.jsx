import React, {useState} from 'react';

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
        <div className="session-form">
            <h1>Register</h1>
                <form onChange={handleChange} onSubmit={handleSubmit}>
                    <input className="session-field" name="username"/>
                    <input className="session-field" name="email" />
                    <input className="session-field" name="password"/>
                    <input className="session-field" name="passwordConfirm" />
                    <input type="submit" className="session-button" />
                </form>
        </div>
    );
}

export default Register;