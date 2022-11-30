import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Favorites from "../pages/Favorites";

const GeneralLibrary = () => {
  return (
    <>
      <NavBar />
      
      <Favorites />
      <main className="library-layout">
        {/* <div className="favorite-books-card">
          
          <Link to={"/Favorite-Books"}>Your favorite books</Link>
        </div> */}
        <div>
          <Outlet />
        </div>
      </main>
      <Footer />
      
    </>
  );
};

export default GeneralLibrary;
