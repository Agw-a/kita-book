import React from 'react'
import "../styles/App.css"
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from 'axios'
import { Book_Details_Url } from './LibraryApi/LibraryApi'
import NavBar from './NavBar'
import Footer from './Footer'



const BookDetails = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/Library")
  }

  const {id} = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    axios.get(`${Book_Details_Url}/${id}`).then(response => {
      setBook(response.data)
    }).catch((err) => console.log(err))
  }, [id])
  return (

    

    <main className="detail-background">
    <NavBar />

    <button className='detail-button' onClick={goBack}> ↖ Go back</button>

    <div className='detail-container'>
      
      <div className='detail-card'>
      
      <div className='detail-img'>
      
        <img src={book?.image_url} alt={book?.title}/>
      </div>
      <div  className='detail-text'>
      <p className='detail-titles'>{book?.title}</p>
      <p className='detail-titles' >Author | {book?.authors}</p>
        <div className='detail-description'>
        <p>Description</p>
        <p>{book?.description}</p>
        <p>Pages:</p>
        <p>{book?.num_pages}</p>
        <p>Genres</p>
        <p>{book?.genre_list}</p>
        </div>
        <div className='detail-quote'>

        <blockquote>
          <p>
          {book?.Quote1}

          
          </p>
          <cite>{book?.authors}</cite>
        </blockquote>
        </div>

      </div>
      </div>
    </div>
    <Footer />
    </main>
 

  )
}

export default BookDetails
