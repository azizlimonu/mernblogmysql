import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);
    try {
      await axios.post("http://localhost:8800/auth/register", inputs);
      navigate('/login');
    } catch (error) {
      setError(error);
      console.log("Register", error);
    }
  }

  return (
    <div className='auth'>
      <h1>Register</h1>

      <form>
        <input
          required
          type='text'
          placeholder='username'
          name='username'
          onChange={handleChange}
        />
        <input
          required
          type='text'
          placeholder='email'
          name='email'
          onChange={handleChange}
        />
        <input
          required
          type='password'
          placeholder='password'
          name='password'
          onChange={handleChange}
          autoComplete="on"
        />
        <button onClick={handleSubmit}>
          Register
        </button>

        {error && <p style={{ color: "red" }}>{error.response.data}</p>}
        
        <span>
          Do you have an account?{" "}
          <Link to='/login'>
            Login
          </Link>
        </span>

      </form>
    </div>
  )
}

export default Register