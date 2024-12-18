import {React} from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Navbar =({onNavClick}) =>{

    return(

        <div>
            <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <h2>QuickCab</h2>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/home" className="nav-button" onClick={() =>onNavClick('home')}>Home</Link>
          </li>
          <li>
            <Link to="/bookride" className="nav-button" onClick={() => onNavClick('bookride')}>Book Ride</Link>
          </li>
          <li>
            <Link to="/about" className="nav-button" onClick={() => onNavClick('about')}>About</Link>
          </li>
          <li>
            <Link to="/profile" className="nav-button" 
            // onClick={() =>   onNavClick('profile')}
               >Profile</Link>
          </li>
          <li>
            <Link to="/history" className="nav-button" 
            //  onClick={() => onNavClick('history')}
             >Booking History</Link>
          </li>
        </ul>
      </div>
    </nav>
        </div>

    );
};

export default Navbar;
