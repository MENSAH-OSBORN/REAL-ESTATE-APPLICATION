import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Properties from "./Properties";
import Nav from "./nav";
import Dashboard from "./dashboard";
import Property from "./Property";
import SignUp from "./Signup";
import AgentSignup from "./AgentSignup";
import Header from "./header";
import Login from "./Login";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/agentsignup" element={<AgentSignup />} />
        <Route path="/" element={<DashboardContainer />} />
      </Routes>
      <Nav />
    </Router>
  );
}

function DashboardContainer() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />

      <Route path="/property/:id" element={<Property />} />
      <Route path="/" element={<Properties />} />
    </Routes>
  );
}

export default App;
