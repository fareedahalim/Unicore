import React from "react";
import { Toaster } from "react-hot-toast";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectFlowLanding from "./pages/ProjectFlowLanding";
import SignIn from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";


const App: React.FC = () => {
  return (
    <Router>
       <Toaster position = "top-center" reverseOrder={false} />
      <Routes>
        <Route path = "/" element = {<ProjectFlowLanding />} />
        <Route path = "/login" element = {<SignIn />} />
        <Route path = "/signup" element = {<Signup />} />
        <Route path = "/home" element = { <Home/>} />
        <Route path = "/forgot-password" element = {<ForgotPassword/>} />
      </Routes>
    </Router>
  );
};

export default App;
