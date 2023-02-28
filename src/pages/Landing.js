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
        <div className="hero-card">
          <div className="hero-img">
            <h1>Discover Books</h1>
            <div className="main-text">
              <h1>Build your online Library</h1>
            </div>
          </div>

          <div className="books-landing-page">
            <div>
              <img
                className="landing-img"
                src="https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2018/02/don-quixote.jpg"
                alt="book-shelf"
              />
            </div>
            <div>
              <img
                className="landing-img"
                src="https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2018/02/ricardo.png"
                alt="book-shelf"
              />
            </div>

            <div>
              <img
                className="landing-img"
                src="https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2018/02/white.jpg"
                alt="book-shelf"
              />
            </div>
          </div>
          <button
            className="landing-page-button"
            onClick={() => navigate("/Library")}
          >
            Browse Books
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
