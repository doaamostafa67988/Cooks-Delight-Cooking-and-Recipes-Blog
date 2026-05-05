import { useState } from 'react';
import Navbar from '../features/recipes/components/Navbar';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation - check if both fields are filled
    if (username.trim() === '' || password.trim() === '') {
      alert('Try Again');
      return;
    }

    // You can add more sophisticated validation here
    // For now, we'll accept any non-empty username and password
    alert(`Welcome ${username}`);
    
    // Reset form
    setUsername('');
    setPassword('');
  };

  return (
    <main className="login-page">
      <div className="login-brand">
        <a href="/" className="brand" aria-label="Cooks Delight home">
          <div className="brand-mark">
            <span></span>
          </div>
          <span>
            Cooks
            <br />
            Delight
          </span>
        </a>
      </div>

      <div className="login-mobile-nav">
        <Navbar />
      </div>

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
