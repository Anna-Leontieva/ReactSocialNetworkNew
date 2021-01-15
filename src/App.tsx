import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Profile from './components/Profile/profile';
import Dialogs from './components/Dialogs/Dialogs';
import store from './Redax/state';

function App(props:any) {
  return (
  <BrowserRouter>
  <div className="app-wrapper">
    <Header/>
    <Navbar/>
    <div className="app-wrapper-content">
      <Route path='/profile' render={()=><Profile 
      profilePage={props.store.profilePage}
      dispatch={props.store.dispatch.bind(store)}
       addPostCallBack={store.addPost.bind(store)} 
       changeNewTextCallback={store.changeNewTextCallback.bind(store)}
      
      />}/>
      <Route path='/dialogs' render={()=><Dialogs dialogsPage={props.store.dialogsPage} />}/>
    </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
