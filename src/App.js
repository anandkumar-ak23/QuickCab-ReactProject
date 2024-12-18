// import React, {} from 'react';
// import logo from './logo.svg';
// import './App.css';
// import './styles.css';
// import Header from './frontend/Header';
// import Navbar from './frontend/Navbar';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Authentication from './frontend/Authentication';
// import Footer from './frontend/Footer';
// import About from './frontend/About';
// import Home from './frontend/Home';
// import { BookingProvider } from './BookingContext';
// import Profile from './Profile';
// // import Authentication from './frontend/Authentication';
// import { AuthProvider } from './AuthContext';
// import BookingHistory from './BookingHistory';
// function App() {
//   return (
//     <div className="App">
//       {
//           // localStorage.removeItem("uname")
//           // localStorage.removeItem("name")
//           // localStorage.removeItem("email")
//           // localStorage.removeItem("mobile")
//           // localStorage.removeItem("pwd")
//       }
//       {/* <h1>Home page</h1> */}
//       {/* <Header/> */}
//       {/* <Navbar/> */}
//       <Router>
//         <Routes>
//           <Route path='/auth' element={<Authentication/>}/>
       
//           <Route path='/home' element={localStorage.getItem('uname') ?<Home props='home'/>:<Authentication/>}/>
//           <Route path='/bookride' element={localStorage.getItem('uname') ?<Home props='bookride'/>:<Authentication/>}/>
//           <Route path='/about' element={localStorage.getItem('uname') ?<Home props='about'/>:<Authentication/>}/>
//           <Route path='/profile' element={localStorage.getItem('uname') ?<Profile/>:<Authentication/>}/>
//           <Route path='/history' element={localStorage.getItem('uname') ?<BookingHistory/> :<Authentication/>}/>
//           {/* <Route path='' element={<Authentication/>}/> */}
//           {/* <Route path='' element={<Authentication/>}/> */}
//           <Route path='/' element={<Authentication/>}/>
          
//         </Routes>
//       </Router>
     
//     </div>
//   );
// }

// export default App;
import React from 'react';
import './App.css';
import './styles.css';
import Header from './frontend/Header';
import Navbar from './frontend/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Authentication from './frontend/Authentication';
import Footer from './frontend/Footer';
import About from './frontend/About';
import Home from './frontend/Home';
import { BookingProvider } from './BookingContext';
import Profile from './Profile';
import { AuthProvider } from './AuthContext';
import BookingHistory from './BookingHistory';

// Wrapper Component to check if user is authenticated
const ProtectedRoute = ({ element }) => {
  return localStorage.getItem('uname') ? element : <Authentication />;
};

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/auth' element={<Authentication />} />
          
          <Route path='/home' element={<Home props='home' />}  />
          <Route path='/bookride'  element={<Home props='bookride' />} />
          <Route path='/about'  element={<Home props='about' />}  />
          <Route path='/profile'  element={<Profile />}  />
          <Route path='/history'  element={<BookingHistory />}  />
          
          <Route path='/' element={<Authentication />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
