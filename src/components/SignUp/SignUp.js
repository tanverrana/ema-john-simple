import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }

    if (user) {
        navigate("/shop");
    }

    const handleCreateUser = event => {
        event.preventDefault();

        /*  if (password !== confirmPassword) {
             setError("Your password did not match");
             return;
         } */
        if (password.length < 6) {
            setError("Password must be 6 characters or longer");
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className="form-container">
            <div>
                <h2 className="from-title">Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" name="confirm-password" required />
                    </div>
                    <p style={{ color: "red" }}>{error}</p>
                    <input onBlur={handleConfirmPasswordBlur} className="form-submit" type="submit" value="SignUp" />
                </form>
                <p>Already have an account? <Link className="form-link" to="/login">LogIn</Link></p>
            </div>
        </div>
    );
};

export default SignUp;