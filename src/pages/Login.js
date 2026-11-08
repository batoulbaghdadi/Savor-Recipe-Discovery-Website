import { useState } from "react";
import "../styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
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
    setEmail("");
    setPassword("");
  }

  return (
    <div className="login-container">

      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Welcome Back</h2>
        <p className="login-subtitle">Log in to access your favorite recipes</p>

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

        <button type="submit" className="btn btn-login">Login</button>
      </form>
    </div>
  );
}

export default Login;