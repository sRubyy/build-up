import React from 'react';
import '../scss/register&sign-in/register&sign-in.scss';

const Register = () => {
    return (
        <div className="register">
            <h2 className="form-title">Register</h2>
            <form method="POST" className="register-form">
                <div className="form-group">
                    <label>Username:</label>
                    <input type="text" name="username" placeholder="username"/>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" name="password" placeholder="password"/>
                </div>
                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input type="password" name="password" placeholder="repeat your password"/>
                </div>
                <button type="submit" >Register</button>
            </form>
        </div>
    );
};

export default Register;