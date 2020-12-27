import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Profile from './components/Profile/profile';
import Dialogs from './components/Dialogs/Dialogs';
function App(props:React.FC) {
  return (
  <BrowserRouter>
  <div className="app-wrapper">
    <Header/>
    <Navbar/>
    <div className="app-wrapper-content">
      <Route path='/dialogs' render={()=><Dialogs/>} dialogs={props.dialogs} messages={props.messages}/>
        <Route path='/profile' render={()=><Profile/>} posts={props.posts}/>
    </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
