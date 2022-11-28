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
        {/* <div className="hero-img">
          <h1>01.</h1>
          <h1>Discover Books</h1>
          <div>Intresting card with slideshow maybe</div>
        </div>
      

        <div >
          <div>
          <h2>Placeholder for site hero image</h2>
          </div>
          <div>
          <button onClick={() => navigate("/Library")} >Browse Books</button>
          </div>
          
        </div> */}
        
        <div className="main-text">
          <h1>
            Your online Library
          </h1>

          <button onClick={() => navigate("/Library")} >Browse Books</button>
        </div>
        
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
