import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/homepage.js";
import Donate from "./Components/donation/Donate.jsx";
import FloraFauna from "./Components/Florafauna.jsx";
import Flora from "./Components/flora/Flora.jsx";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/Donate" exact element={<Donate />} />
          <Route path="/florafauna" exact element={<FloraFauna />} />
          <Route path="/FloraFaunaCards" exact element={<Flora />} />
          <Route path='/flora' exact element={<Flora />} />
          

        </Routes>
      </Router>
    </div>
  );
}

export default App;
