import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from "./container/SignUp";
import LogIn from './container/LogIn';
import Dashboard from './Dashboard';
import Header from './container/Header';

const App = () => {
  return (
    <>
      <Header  />
    <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </>
  );
};

export default App;
