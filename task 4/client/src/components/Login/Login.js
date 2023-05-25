import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const submitLogin = () => {
    Axios.post('http://localhost:3306/auth/login', {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
      }
    });
  };

  return (
    <motion.div
      className="wrapper d-flex justify-content-center w-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <form onSubmit={handleSubmit} className="needs-validation mt-5">
        <div className="login rounded">
          <h2 className="mb-3">Login Form</h2>
          <div className="form-group was-validated mb-2">
            <label htmlFor="email" className="form-label">
              Email adress
            </label>
            <input
              value={email}
              type="email"
              className="form-control"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            ></input>
            <div className="invalid-feedback">Please enter your email</div>
          </div>
          <div className="form-group was-validated mb-2">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              value={password}
              type="password"
              className="form-control"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            ></input>
          </div>
          <div className="invalid-feedback">Please enter your password</div>
          <div className="form-group form-check mb-2">
            <input type="checkbox" className="form-check-input"></input>
            <label htmlFor="check" className="form-check-label">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="btn w-100 btn-success mt-2"
            onClick={submitLogin}
          >
            SIGN IN
          </button>
        </div>
      </form>
      <h1>{loginStatus}</h1>
    </motion.div>
  );
};

export default Login;
