import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Donate from "./Components/donation/Donate.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/Donate" exact element={<Donate />}></Route>
      </Routes>
    </Router>
  );
}
export default App;

