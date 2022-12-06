import React from "react";
import { useAppContext } from "../context/Context";
import Booklist from "./Booklist";
import AddFavorite from './interactions/add'
import RemoveFavorite from "./interactions/remove"


const FavoriteBooks = () => {

  // const slide = (shift) => {
  //   scroll.current.scrollLeft += shift;
  // }

  const { fav, addToFavorites, removeFromFavorites } = useAppContext();

  const checkFavoriteBooks = (id) => {
    const Checker = fav.some((book) => book.id === id);

    return Checker;
  };
  return (
    <div className="fav-page">
      
      <span className="for-you-title">Your Library</span>

      <div className="fav-books-container">

        {fav.length > 0 ? (
          fav.map((book) => {
            return (
              <div key={book.id} className="fav-books">
                <div>
                  <img
                    className="fav-book-img"
                    src={book.image_url}
                    alt={`Cover of ${book.title}`}
                  />
                </div>

                <div>
                  <div className="fav-book-title">
                    <span> {book.title}</span>
                  </div>
                  {/* <div className='fav-book-title'>
                <span>{book.genres}</span>
              </div> */}

                  <div className="fav-button">
                    {checkFavoriteBooks(book.id) ? (
                      <button onClick={() => removeFromFavorites(book.id)}>
                        {<RemoveFavorite />}
                      </button>
                    ) : (
                      <button onClick={() => addToFavorites(book)}>
                        {< AddFavorite />}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="favorite-books-empty">
            {/* <span>Add books to your Library</span> */}
          </div>
        )}
       
       {fav.length >= 3 ?  <div><button className="left-scroll" >left</button>  </div>  : <p></p> }

      </div>
    </div>
  );
};

export default FavoriteBooks;
