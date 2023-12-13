import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Homepage from "./Components/homepage.js";
import Donate from "./Components/donation/Donate.jsx";
// import { render } from "@testing-library/react";


function App(){
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage />}></Route>
          <Route path="/Donate" exact element={<Donate />}></Route>
          {/* <Route path="/"></Route> */}
        </Routes>
      </Router>
    </div>
  );
  }
  export default App;



