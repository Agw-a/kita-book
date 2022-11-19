import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import LandingPage from "../pages/Landing";
import SignUp from "../pages/SignUp";
import SearchLibraryData from "../components/GetLibraryData";
import { AppProvider } from "../context/Context";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Sign-Up" element={<SignUp />} />
          <Route path="/Library" element={<SearchLibraryData />}>
          <Route path="book"/>
          <Route />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
