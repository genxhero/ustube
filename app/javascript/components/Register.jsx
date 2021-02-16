import React, {useState} from 'react';

const Register = props => {
    const [user, updateUser] = useState({username: "", email: "", password: "", passwordConfirm: ""})


    const handleChange = e => {
        console.log("the function isbeing called")
    }

    return (
        <div className="session-form">
            <h1>Register</h1>
                <form onChange={handleChange}>
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