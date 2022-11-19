import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
      <form>
        <input placeholder='First Name'/>
        <input placeholder='Last Name'/>
        <input placeholder='email'/>
        <input placeholder='Password'/>
        <input placeholder='Confirm Password'/>
        <button type='submit'>Create Account</button>
      </form>
      <div>
        <p>Already have an Account? <Link to={'/Login'}>Login instead</Link></p>
      </div>
    </div>
  )
}

export default SignUp
