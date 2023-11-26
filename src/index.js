import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import About from "./pages/About";
import Music from "./pages/Music";
import Credits from "./pages/Credits";
import Contact from "./pages/Contact";
import Shpilke from "./pages/Shpilke";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/marc-yu-music/about" element={<About />} />
      <Route path="/marc-yu-music/music" element={<Music />} />
      <Route path="/marc-yu-music/credits" element={<Credits />} />
      <Route path="/marc-yu-music/contact" element={<Contact />} />
      <Route path="/marc-yu-music/music/shpilkes" element={<Shpilke />} />
    </Routes>
  </BrowserRouter>
);
