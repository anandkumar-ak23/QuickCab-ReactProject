
import React, { useState } from 'react';
import BookRide from './BookRide';
import About from './About';
import Footer from './Footer';
import Navbar from './Navbar';
import Header from './Header';
import Profile from '../Profile';
import Authentication from './Authentication';
const Home = () => {
  const [page, setPage] = useState('home'); // Track current page for scrolling

  const handleNavClick = (currpage) => {
    setPage(currpage); // Set the active page
    const element = document.getElementById(`${currpage}-scroll-page`);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div>

{localStorage.getItem('uname') ?

  <><Header />
  <Navbar onNavClick={handleNavClick} /> {/* Pass handleNavClick to Navbar */}

  <div id="home-scroll-page" className="container home-page home-scroll-page">
    <h2>QuickCab</h2>
    <p>User-Centric Cab Booking Platform</p>
  </div>

  <div id="bookride-scroll-page" className="bookride-scroll-page">
    <BookRide />
  </div>

  <div id="about-scroll-page" className="about-page">
    <About />
  </div>    

  <Footer />
  </>: 
  
  <Authentication/>
  }


      
    </div>
  );
};

export default Home;
