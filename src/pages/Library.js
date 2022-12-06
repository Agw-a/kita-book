import React from "react";
import {  Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Favorites from "../pages/Favorites";

const GeneralLibrary = () => {
  return (
    <>
      <NavBar />
      <main className="Library-main-page">
      <Favorites />
      <div className="library-layout">
        {/* <div className="favorite-books-card">
          
          <Link to={"/Favorite-Books"}>Your favorite books</Link>
        </div> */}
        
          <Outlet />
        
      </div>
      </main>
      <Footer />
      
    </>
  );
};

export default GeneralLibrary;
