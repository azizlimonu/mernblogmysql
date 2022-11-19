import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../app/AuthContext";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);
  const { currentUser } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      console.log("currentUser", currentUser);
      navigate('/')
    } catch (error) {
      console.log("errorREsponse", error.response);
      setError(error.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
          autoComplete="on"
        />
        <button onClick={handleSubmit}>Login</button>

        {error != null && <p style={{ color: "red", display: "block" }}>{error}</p>}

        <span>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;