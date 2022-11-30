import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styles/App.css";
import LandingPage from "../pages/Landing"
// import About from "../pages/About";
import GeneralLibrary from "../pages/Library";
import Booklist from "../components/Booklist";
import BookDetails from "../components/BookDetails";
import Favorites from "../pages/Favorites";
import Loader from "../components/Loader";

function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          {/* <Route path="/About" element={<About />}/> */}
          <Route path="/Library" element={<GeneralLibrary />}>

            <Route index element={<Booklist />}/>
            <Route path="Favorite-Books" element={<Favorites />}/>
          </Route>
          <Route path="Favorite-Books" element={<Favorites />}/>
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/spiner" element={<Loader />}/>
        </Routes>
      </BrowserRouter>


  );
}

export default App;
