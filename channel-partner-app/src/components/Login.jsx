import "./Login.css";
import logo from "../assets/grasp-logo.png";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Navigate to Home Page
    navigate("/home");
  };

  return (
    <div className="login-container">

      <div className="login-card">

        {/* Logo */}
        <div className="top-section">
          <img
            src={logo}
            alt="GRASAP Logo"
            className="brand-logo"
          />
        </div>

        {/* Tabs */}
        <div className="tabs">
          <button className="tab active">
            Channel Partner Login
          </button>

          <button className="tab">
            Rising Star Login
          </button>
        </div>

        {/* Login Form */}
        <form className="form" onSubmit={handleLogin}>

          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              autoComplete="username"
            />
          </div>

          <div className="password-field">
            <input
              type="password"
              placeholder="Password"
              autoComplete="current-password"
            />

            <span className="toggle-password">
              👁
            </span>
          </div>

          <div className="forgot-password">
            Forgot Password?
          </div>

          <button
            type="submit"
            className="login-btn"
          >
            LOGIN
          </button>

          <button
            type="button"
            className="secondary-btn"
          >
            REQUEST FOR EMPANELMENT
          </button>

          <div className="bottom-text">

            <p>
              Don't have an account?
            </p>

            <p className="faq">
              FAQ
            </p>

            <p className="version">
              Version 6.0.0
            </p>

          </div>

        </form>

      </div>

    </div>
  );
}

export default Login;