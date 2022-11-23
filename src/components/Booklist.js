import React, {useState, useEffect} from 'react'
import { LIBRARY_URL } from './LibraryApi/LibraryApi'
import axios from 'axios'

const Booklist = () => {

  const [books, setBooks] = useState([])

 

  useEffect(() => {
    axios.get(LIBRARY_URL).then(response => {
      console.log(response.data)
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
                <h2> {book.title}</h2>
              </div>
              <div>
                <img src={book.image_url} alt={`Cover of ${book.title}`}/>
              </div>
              <div>
                <button>Add to favorites</button>
              </div>
            </div>
          )
        })
      }
     
    </div>
  )
}

export default Booklist;
