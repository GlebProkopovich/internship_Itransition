import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Axios from 'axios';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const submitRegistrate = () => {
    Axios.post('http://localhost:3306/auth/registration', {
      username: username,
      email: email,
      password: password,
    }).then(alert('success insert data'));
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
          <h2 className="mb-3">Registration Form</h2>
          <div className="form-group was-validated mb-2">
            <label htmlFor="text" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            ></input>
            <div className="invalid-feedback">Please enter your username</div>
          </div>
          <div className="form-group was-validated mb-2">
            <label htmlFor="email" className="form-label">
              Email adress
            </label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
            <div className="invalid-feedback">Please enter your email</div>
          </div>
          <div className="form-group was-validated mb-2">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            onClick={submitRegistrate}
          >
            REGISTRATE
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Register;
