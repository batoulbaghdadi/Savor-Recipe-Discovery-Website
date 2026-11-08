import { useState } from "react";
// You can reuse Login.css since they share the same container and form classes!
import "../styles/Login.css"; 

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) {
      setError("Username is required");
      return;
    }
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!password) {
      setError("Password is required");
      return;
    }
    if (password.length < 8) {
      setError("Password should be at least 8 characters");
      return;
    }
    if (password.length > 15) {
      setError("Password should be less than 15 characters");
      return;
    }

    setError("");
    alert("Sign up successful!"); // Placeholder for successful submission
    setEmail("");
    setPassword("");
    setUsername("");
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <p className="login-subtitle">Create an account to access your favorite recipes</p>
        
        <div className="input-group">
          <input 
            type="text"
            placeholder="Enter your username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input-group">
          <input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="btn btn-login">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;