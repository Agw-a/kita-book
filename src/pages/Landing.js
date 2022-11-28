import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";




const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <main className="homepage-body">
        <div className="hero-img">
          <h1>01.</h1>
          <h1>Discover Books</h1>
          <div className="main-text">
          <h1>
            Your online Library
          </h1>

          <button onClick={() => navigate("/Library")} >Browse Books</button>
        </div>
        </div>
      

        <div >
          <div>
          <h2>Placeholder for site hero image</h2>
          <img 
          src="../images/books.8dba9977.jpeg" alt="book-shelf"
          />
          </div>
          
          
        </div>
        

        
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
