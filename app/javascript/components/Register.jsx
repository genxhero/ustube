import React, {useState} from 'react';

const Register = props => {
    const [user, updateUser] = useState({username: "", email: "", password: "", passwordConfirm: ""})


    const handleChange = e => {
        const newUser = Object.assign(user, {[e.target.name]: e.target.value})
        updateUser(newUser)
    }

    const handleSubmit = e => {
        console.log("trybnna submit")
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