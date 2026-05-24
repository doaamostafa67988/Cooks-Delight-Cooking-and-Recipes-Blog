import { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();


    if (username.trim() === '' || password.trim() === '') {
      alert('Try Again');
      return;
    }

    alert(`Welcome ${username}`);

    navigate('/recipe-details');

    setUsername('');
    setPassword('');
  };

  return (
    <main className="login-page">

      <section className="login-card">
        <div className="login-image" aria-hidden="true">
          <img src="/assets/login-cooking.jpg" alt="" />
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <h1>Log In</h1>
          <p>
            Welcome back to your kitchen. Log in to access your saved recipes,
            favorite dishes, and personal cooking space.
          </p>

          <label htmlFor="username">Username</label>
          <input 
            id="username" 
            name="username" 
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            name="password" 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="button button-primary">
            Sign Up Now!
          </button>

          <div className="login-divider"></div>

          <div className="create-account">
            <span>Don't have an account?</span>
            <a href="/login">Create one now</a>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Login;
