import React, {useState, useEffect} from 'react'
import { LIBRARY_URL } from './LibraryApi/LibraryApi'
import axios from 'axios'
import { useAppContext } from '../context/Context'
import { useNavigate } from 'react-router-dom'

const Booklist = () => {
  const navigate = useNavigate()

  const [books, setBooks] = useState([])

 const {fav, addToFavorites, removeFromFavorites} = useAppContext();


 
   
  const checkFavoriteBooks = (id) => {

    const Checker  = fav.some((book) => book.id === id)

    return Checker
  }



  useEffect(() => {
    axios.get(LIBRARY_URL).then(response => {
      // console.log(response.data)
      setBooks(response.data)
    }).catch(err => console.log(err))
  }, [])


  return (
    <div className='Book-list'>
      {
        books.map((book) => {
          return (
            <div key={book.id}>
              <div>
                <h4> {book.title}</h4>
              </div>
              <div>
                <span>{book.genres}</span>
              </div>
              <div>
                <img onClick={() => navigate(`/books/${book.id}`)} src={book.image_url} alt={`Cover of ${book.title}`}/>
              </div>
              <div>
                {
                  checkFavoriteBooks(book.id) ? <button onClick={() => removeFromFavorites(book.id)} >Remove from favorites</button> :
                  <button onClick={() => addToFavorites(book)} >Add to favorites</button>
                }
                
              </div>

            </div>
          )
        })
      }
     
    </div>
  )
}

export default Booklist;
