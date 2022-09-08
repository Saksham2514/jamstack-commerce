import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {

  const jwt = localStorage.getItem('jwt')
  const navigate = useNavigate()
  const logout = ()=>{
    localStorage.removeItem('jwt')
    navigate('/login')
  }
  return (
    <div>
      
  <nav>
    <div className="nav-wrapper blue darken-2 ">
      <Link to="/" className="brand-logo">Ecommerce</Link>
      
      <ul id="nav-mobile" className="right">
        
      <li>
              <Link to="/cart">
              <i className="material-icons " style={{marginRight:"1rem",cursor:"pointer"}}>add_shopping_cart</i>
              </Link>
            </li>

        {
        jwt?
          
            <li>
              <i className="red btn material-icons" onClick={logout} >logout</i>
            </li>

        :
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
          }
      </ul>
      
    </div>
  </nav>
    </div>
  )
}

export default Navbar
