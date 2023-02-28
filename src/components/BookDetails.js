import React from "react";
import "../styles/App.css";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Book_Details_Url } from "./LibraryApi/LibraryApi";
import NavBar from "./NavBar";
import Footer from "./Footer";

const BookDetails = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/Library");
  };

  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    axios
      .get(`${Book_Details_Url}/${id}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <>
      <NavBar />
      <main className="detail-background">
        <button className="detail-button" onClick={goBack}>
          {" "}
          ↖ Go back
        </button>

        <div className="detail-container">
          <div className="detail-card">
            <div className="detail-img">
              <img src={book?.image_url} alt={book?.title} />
            </div>
            <div className="detail-text">
              <p className="detail-book-titles">{book?.title}</p>
              <p className="detail-titles-author">Author | {book?.authors}</p>
              <div className="detail-description">
                <p className="description-text">{book?.description}</p>
                <p className="description-pages">Pages | {book?.num_pages} </p>

                <p className="description-genres">
                  Genres | {book?.genre_list}
                </p>
              </div>
              <div className="detail-quote">
                <blockquote>
                  <p>{book?.Quote1}</p>
                  <cite>{book?.authors}</cite>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default BookDetails;
