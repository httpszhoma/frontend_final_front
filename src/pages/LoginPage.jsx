import React, { useState } from 'react';
import axios from "axios";

function LoginPage(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const api = axios.create({
                baseURL: "http://localhost:9000", // Update this to match your backend's URL
            });
            const res = await api.post('/auth/login', {
                email: email,
                password: password
            });
            console.log(res.data.token);
            localStorage.setItem('token', res.data.token);
            console.log('Login successful:', res.data);
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit} className="flex flex-col bg-neutral-200 p-4 rounded-lg items-start gap-2">
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-2 text-xl"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-2 text-xl"
                />
                <button type="submit" className="bg-neutral-400 rounded px-4 py-2">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;
