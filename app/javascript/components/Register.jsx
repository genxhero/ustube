import React, {useState} from 'react';

const Register = props => {
    const [user, updateUser] = useState({username: "", email: "", password: "", passwordConfirm: ""})


    const handleChange = e => {
        console.log(user)
    }

    const handleSubmit = e => {
        console.log("trybnna submit")
    }

    return (
        <div className="session-form">
            <h1>Register</h1>
                <form onChange={handleChange} onSubmit={handleSubmit}>
                    <input className="session-field" value={user.username}/>
                    <input className="session-field" value={user.email}/>
                    <input className="session-field" value={user.password}/>
                    <input className="session-field" value={user.passwordConfirm}/>
                    <input type="submit" className="session-button" />
                </form>
        </div>
    );
}

export default Register;