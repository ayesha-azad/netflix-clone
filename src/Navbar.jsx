import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
     <div className="container">
      <nav>
        <a href=""><div className='logo'></div></a>
        <button className='sign-in'>Sign In</button>
      </nav>
     </div> 
    </>
  )
}

export default Navbar
