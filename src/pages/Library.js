import React from 'react'
import {Link, Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const GeneralLibrary = () => {
    
  return (
    <>
    <NavBar />
    <div>
      <div> <Link to={"/Favorite-Books"}>Your favorite books</Link></div>
    
    </div>
    <Outlet />
    <Footer />
    </>
  )
}

export default GeneralLibrary
