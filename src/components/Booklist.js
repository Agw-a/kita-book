import React, { useState, useEffect } from "react";
import { LIBRARY_URL } from "./LibraryApi/LibraryApi";
import axios from "axios";
import { useAppContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
import "../styles/App.css";
import Loader from "./Loader";
import Pagnation from "./Pagnation";
import AddFavorite from './interactions/add'
import RemoveFavorite from "./interactions/remove"


const Booklist = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [books, setBooks] = useState([]);

  // const [search, setSearch] = useState("");
  // console.log(search);

  const [postPerPage, setPostPerPage] = useState([8]);
  const [currentPage, setcurrentPage] = useState([1]);

  const { fav, addToFavorites, removeFromFavorites } = useAppContext();

  const checkFavoriteBooks = (id) => {
    const Checker = fav.some((book) => book.id === id);

    return Checker;
  };

  const lastPostIndex = currentPage * postPerPage;
  const firstpostIndex = lastPostIndex - postPerPage;

  const currentPost = books.slice(firstpostIndex, lastPostIndex);

  useEffect(() => {
    setLoading(true);
    axios
      .get(LIBRARY_URL)
      .then((response) => {
        // console.log(response.data)
        setBooks(response.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
    
      {/* <div>
        <input
          type={"text"}
          placeholder="Search..."
          onChange={(event) => setSearch(event.target.value)}
        />
      </div> */}

      <div className="Book-list">
        {loading ? (
          <Loader />
        ) : (
          currentPost
            // .filter((book) => book.title.toLowerCase().includes(search))
            .map((book) => {
              return (
                <div key={book.id} className="book-cover">
                  <div>
                    <img
                      className="individual-cover"
                      onClick={() => navigate(`/books/${book.id}`)}
                      src={book.image_url}
                      alt={`Cover of ${book.title}`}
                    />
                  </div>

                  <div className="display-book-details">
                    <div className="book-title">
                      <h4> {book.title}</h4>
                    </div>

                    {/* <div className="author-display">
                      <span>{book.authors}</span>
                    </div> */}

                    <div className="author-display">
                      <span>{book.num_pages}</span> | <span>{book.format}</span>
                    </div>

                    {/* <div className="author-display">
                      <span>{book.genres}</span>
                    </div> */}

                    <div className="author-display">
                      {checkFavoriteBooks(book.id) ? (
                        <button onClick={() => removeFromFavorites(book.id)}>
                          {< RemoveFavorite />}
                        </button>
                      ) : (
                        <button onClick={() => addToFavorites(book)}>
                          { < AddFavorite /> }
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
        )}

        <div className="pagnation">
          <Pagnation
            totalPosts={books.length}
            postsPerPage={postPerPage}
            setCurrentPage={setcurrentPage}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  );
};

export default Booklist;
