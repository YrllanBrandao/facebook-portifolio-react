import React, {useState} from 'react';
import{ Routes, Route, Link} from 'react-router-dom';
import { Icon } from '@iconify/react';
import LigthBoxAction from './_assets/js/lightBox/lightBoxAction';
import Header from './components/header';
import Main from './components/post/main';
import About from './components/about/index';
import Home from './components/home';
import './App.css';


function App() {

   
  return (
    <>
      <Header />

      <main>
      <Routes>
      <Route path='/' Component={Home}/>
      <Route path="/about" Component={About}/>
      </Routes>
      </main>
    </>
  );
}

export default App;
