import React from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { Routes, Route, useLocation } from 'react-router-dom';
import './Main.css';

const Main = () => {
  const location = useLocation();
  return (
    <div>
      {/* <AnimatePresence> */}
      <Routes location={location} key={location.pathname}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* </AnimatePresence> */}
    </div>
  );
};

export default Main;
