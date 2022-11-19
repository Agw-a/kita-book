import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import LandingPage from '../pages/Landing';
import SignUp from '../pages/SignUp';
import SearchLibraryData from '../components/GetLibraryData';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />}/>
      <Route path='/Sign-Up' element={<SignUp />}/>
      <Route  path='/Library' element={<SearchLibraryData />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
