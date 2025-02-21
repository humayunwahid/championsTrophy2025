"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SignInForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        const data = await res.json();

        if (res.ok) {
            setSuccess(data.message);
            setError('');
            localStorage.setItem('admin_authenticated', 'true'); // Save auth state
            router.push('/admin/fixtures'); // Redirect to admin dashboard
        } else {
            setError(data.message);
            setSuccess('');
        }
    };

    return (
        <section className="sign-in-section section-padding fix">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="sign-in-items">
                            <div className="title text-center">
                                <h2>Sign In to your Admin Account</h2>
                            </div>
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                            {success && <p style={{ color: 'green' }}>{success}</p>}
                            <form onSubmit={handleSubmit}>
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="form-clt style-2">
                                            <span>Username *</span>
                                            <input
                                                type="text"
                                                placeholder="Username"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-clt">
                                            <span>Password *</span>
                                            <input
                                                type="password"
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <button type="submit" className="theme-btn">Sign In</button>
                                    </div>
                                    <div className="col-lg-4">
                                    <a href="/" className="theme-btn" style={{ backgroundColor: '#6c757d', color: '#fff' }}>Go Home</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignInForm;
