import React from 'react'
import {useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav>

      <div>
        <h1>Kita-Book</h1>
      </div>
      <div>
      <button onClick={() => navigate("/Library")} >Browse Books</button>
      </div>
      <div>
      <button onClick={() => navigate("/Log-in")}>Login</button>
      </div>
      <div>
      <button onClick={() => navigate("/Sign-Up")}>SignUp</button>
      </div>
      
    </nav>
  )
}

export default NavBar
