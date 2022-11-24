import React from 'react'
import { useAppContext } from '../context/Context';

const FavoriteBooks = () => {

    const {fav, addToFavorites, removeFromFavorites} = useAppContext();


 
   
    const checkFavoriteBooks = (id) => {
  
      const Checker  = fav.some((book) => book.id === id)
  
      return Checker
    }
  return (
    <div>
      <h4>Your favorite books</h4>
      { fav.length > 0 ?
        fav.map((book) => {
          return (
            <div key={book.id}>
              <div>
                <h4> {book.title}</h4>
              </div>
              <div>
                <span>{book.genres}</span>
              </div>
              <div>
                <img src={book.image_url} alt={`Cover of ${book.title}`}/>
              </div>
              <div>
                {
                  checkFavoriteBooks(book.id) ? <button onClick={() => removeFromFavorites(book.id)} >Remove from favorites</button> :
                  <button onClick={() => addToFavorites(book)} >Add to favorites</button>
                }
                
              </div>

            </div>
          )
        }) : <h4>You havent added books to your library yet</h4>
      }
     

    </div>
  )
}

export default FavoriteBooks
