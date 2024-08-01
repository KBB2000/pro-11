import React from "react";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import ProtectRoute from "./Services/ProtectRoute";

const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/" element={<ProtectRoute />}> */}
          <Route path="/home" element={<Home />} />
        {/* </Route> */}
      </Routes>
    </div>
  );
};

export default App;
