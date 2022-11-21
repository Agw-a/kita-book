import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import LandingPage from "../pages/Landing"
import About from "../pages/About";
import GeneralLibrary from "../pages/Library";


function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Library" element={<GeneralLibrary />}/>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
