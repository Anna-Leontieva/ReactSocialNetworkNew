import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Profile from './components/Profile/profile';
import Dialogs from './components/Dialogs/Dialogs';
import { addPost } from './Redax/state';

function App(props:any) {
  return (
  <BrowserRouter>
  <div className="app-wrapper">
    <Header/>
    <Navbar/>
    <div className="app-wrapper-content">
      <Route path='/profile' render={()=><Profile profilePage={props.state.profilePage} addPostCallBack={addPost}/>}/>
      <Route path='/dialogs' render={()=><Dialogs dialogsPage={props.state.dialogsPage} />}/>
    </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
