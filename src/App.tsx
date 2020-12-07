import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/header';
import {BrowserRouter} from 'react-router-dom';
import Footer from './Footer/footer';
import Navbar from './navbar/Navbar';
import Profile from './Profile/profile';
function App() {
  return (
  <BrowserRouter>
  <div className="app-wrapper">
    <Header/>
    <Navbar/>
    <Profile/>
    <Footer/>
    </div>
  </BrowserRouter>
  );
}

export default App;
