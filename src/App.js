import React, {useState, crea, createContext} from 'react';
import{ Routes, Route, Link} from 'react-router-dom';
import { Icon } from '@iconify/react';
import LigthBoxAction from './_assets/js/lightBox/lightBoxAction';
import Header from './components/header';
import About from './components/about/index';
import Home from './components/home';
import Message from './components/message';
import ThemeSwitch from './components/themeSwitch';
import './App.css';


export const SharedMessageState = createContext();
function App() {
  const [showMessage, setMessage] = useState(false);

  const showOrHide = (state) => {
    setMessage(state);
  };

  return (
    <>
     <ThemeSwitch/>
    <SharedMessageState.Provider value={{showMessage, showOrHide}}>
    <Header />
    <main>
      <Routes>
      <Route path='/' element={< Home showMessage={showMessage} showOrHide={showOrHide}/>}/>
      <Route path="/about" element={< About showMessage={showMessage} showOrHide={showOrHide}/>}/>
      </Routes>

      {/* float button */}
     {showMessage ? null : <button className='btn-float-message' onClick={() => showOrHide(true)}>
    <Icon icon="entypo:new-message"  width="24" height="24" /> </button>}
    {showMessage ? <Message setMessage={showOrHide}/> : null}

      </main>
    </SharedMessageState.Provider>
    
    </>
  );
}

export default App;
