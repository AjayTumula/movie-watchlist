import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Heading from '../components/Heading';
import TextBox from '../components/Textbox';
import Button from '../components/Button';

const Login = () => {
    const [email, setEmail] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate(); // Initialize the navigate function

    // Load email from local storage on mount
    useEffect(() => {
        const savedEmail = localStorage.getItem('userEmail');
        if (savedEmail) {
            setEmail(savedEmail);
            setIsLoggedIn(true);
        }
    }, []);

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleLogin = () => {
        if (email) {
            localStorage.setItem('userEmail', email);
            setIsLoggedIn(true);
            navigate('/home'); // Navigate to the home page
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('userEmail');
        setEmail("");
        setIsLoggedIn(false);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-slate-50">
            <div className="bg-cyan-200 rounded-lg w-[80%] sm:w-[50%] lg:w-[23%] text-center p-3">
                <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
                    <Heading label={isLoggedIn ? 'Welcome Back!' : 'Login With Email'} />
                    <TextBox 
                        label={'Email'} 
                        name={'email'} 
                        placeholder={'johndoe@example.com'} 
                        value={email} 
                        onChange={handleChange} 
                        disabled={isLoggedIn} // Disable email input when logged in
                    />
                    {isLoggedIn ? (
                        <Button label={'Log Out'} onClick={handleLogout} />
                    ) : (
                        <Button label={'Log In'} onClick={handleLogin} />
                    )}
                </form>
            </div>  
        </div>
    );
}

export default Login;
