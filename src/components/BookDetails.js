import React from 'react'
import "../styles/App.css"
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from 'axios'
import { Book_Details_Url } from './LibraryApi/LibraryApi'

const BookDetails = () => {

  const {id} = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    axios.get(`${Book_Details_Url}/${id}`).then(response => {
      setBook(response.data)
    }).catch((err) => console.log(err))
  }, [id])
  return (
    <div>
      Book BookDetails
      <div>
      <h4>{book?.title}</h4>
        <img src={book?.image_url} alt={book?.title}/>
      </div>
      <div>
        <h4>Author</h4>
        <h3>{book?.authors}</h3>
        <h2>Description</h2>
        <p>{book?.description}</p>
        <p>Pages:</p>
        <p>{book?.num_pages}</p>
        <p>Genres</p>
        <p>{book?.genre_list}</p>
        <blockquote>
          {book?.Quote1}
        </blockquote>
      </div>
    </div>
  )
}

export default BookDetails
