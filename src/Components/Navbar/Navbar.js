import React from "react";
import CartWidget from "../CartWidget";
import  {NavLink} from 'react-router-dom';
import "./navbar.css";



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to='/'>
    BIKERTOWN
  </NavLink>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <NavLink className="nav-link" to='/'>
          HOME <span className="sr-only"></span>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to='categories/adv'>
          ADV
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to='categories/sport'>
          SUPER SPORT
        </NavLink>
      </li>
    
      <li className="nav-item">
        <NavLink className="nav-link" to='cart'>
          <CartWidget />
        </NavLink>
      
      </li>
    
    </ul>
  </div>
</nav>
    )
}
export default Navbar