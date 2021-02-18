import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Profile from './components/Profile/profile';
import Dialogs from './components/Dialogs/Dialogs';
import  { StoreType } from './Redax/store';
import store from './Redax/redaxStore'

function App(props: any) {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/profile' render={
            () =>
              <Profile
                profilePage={props.store.getState().profilePage}
                dispatch={store.dispatch.bind(props.store)}
              />} />
          <Route path='/dialogs' render={() => <Dialogs 
          dialogsPage={props.store.getState().dialogsPage}
          dispatch={store.dispatch.bind(props.store)}
         />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
