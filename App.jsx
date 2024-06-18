import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Detect from "./pages/Detect";
import Report from "./pages/Report";
import Fines from "./pages/Fines";
import UserDetect from "./pages/UserDetect";
import AllUsers from "./pages/AllUsers";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Router>
        {/* Navbar is rendered conditionally */}
        <Routes>
          {/* Public routes without Navbar */}
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Routes with Navbar */}
          <Route
            path="/*"
            element={
              <>
                <Navbar show={show} setShow={setShow} />
                <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/detect" element={<Detect />} />
                  <Route path="/report" element={<Report />} />
                  <Route path="/fine" element={<Fines />} />
                  <Route path="/userDetect" element={<UserDetect />} />
                  <Route path="/users" element={<AllUsers />} />
                </Routes>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
