import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Music from "./pages/Music";
import Credits from "./pages/Credits";
import Contact from "./pages/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/music" element={<Music/>}/>
      <Route path="/credits" element={<Credits/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  </BrowserRouter>
);
