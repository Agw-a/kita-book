import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const GeneralLibrary = () => {
  return (
    <>
    <NavBar />
    <div>
        <link>Your favorite books</link>
      <div>Popular books</div>
      <div>Popular authors</div>
    </div>
    <Footer />
    </>
  )
}

export default GeneralLibrary
