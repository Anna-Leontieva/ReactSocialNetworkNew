import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import {BrowserRouter} from 'react-router-dom';
import Footer from './components/Footer/footer';
import Navbar from './components/navbar/Navbar';
import Profile from './components/Profile/profile';
function App() {
  return (
  <BrowserRouter>
  <div className="app-wrapper">
    gggggg
    <Header/>
    <Navbar/>
    <Profile/>
    <Footer/>
    </div>
  </BrowserRouter>
  );
}

export default App;
