import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      <p>Loading...</p>
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
  <div className="center">
    <div className="form-container">
        <div className="form-div">
          <input
            type="text"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
          />
          <input
            type="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button
            className="btn btn-primary"
            onClick={() => logInWithEmailAndPassword(email, password)}
          >
            Login
          </button>
          <button className="btn btn-google" onClick={signInWithGoogle}>
            Login with Google
          </button>
          <div>
            <Link to="/reset">Forgot Password?</Link>
          </div>
          <div>
            Don't have an account? <br /><Link to="/register">Register</Link> now.
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
