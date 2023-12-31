import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/homepage.js";
import Donate from "./Components/donation/Donate.jsx";
import Florafauna from "./Components/homepage/Florafauna.jsx";
import Flora from "./Components/flora/Flora.jsx";
import IucnPage from "./Components/IUCN/iucn_page.jsx";
import DetailedPage from "./Components/Description/description.jsx";
import Holo from "./Components/hologram/hologram.jsx";
import FaunaCardList from "./Components/fauna/fauna.jsx";
import About from "./Components/AboutUs/about.jsx";
import Videos from "./Components/eduVideos/Videos.jsx";
import Feedback from "./Components/feedback/Feedback.jsx";
import Kids from "./Components/kids/kids.jsx";
import Vid1 from "./Components/kids/vid1.jsx";
import Vid2 from "./Components/kids/vid2.jsx";
import Holoedu from "./Components/holoedu/holoedu.jsx";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/Donate" exact element={<Donate />} />
          <Route path="/florafauna" exact element={<Florafauna />} />
          <Route path="/FloraFaunaCards" exact element={<Flora />} />
          <Route path="/flora" exact element={<Flora />} />
          <Route path="/Fauna" exact element={<FaunaCardList />} />
          <Route path="/IUCN" exact element={<IucnPage />} />
          <Route path="/details/:id" element={<DetailedPage />} />
          <Route path="/holo/:id" element={<Holo />} />
          {/* <Route path="/about" exact element={<about />} /> */}
          <Route path="/about" exact element={<About />} />

          <Route path="/eduVideos" exact element={<Videos />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/kids" exact element={<Kids />} />
          <Route path="/vid1" exact element={<Vid1 />} />
          <Route path="/vid2" exact element={<Vid2 />} />

          <Route path="/about" exact element={<About />} />
          <Route path="holoedu" exact element={<Holoedu />} />
          <Route path="/Feedback" exact element={<Feedback />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
