import React, {useState} from 'react';
import { Icon } from '@iconify/react';
import LigthBoxAction from './_assets/js/lightBox/lightBoxAction';
import Header from './components/header';
import Main from './components/post/main';
import About from './components/about/about';

import './App.css';


function App() {

  const [showMessage, setMessage] = useState(false);
  const showOrHide = () => setMessage(true);


  function form()
  {
    return(<>
    <form action="https://formsubmit.co/yrllanbrandao@outlook.com" class="message-form form-control bg-dark-2  d-flex flex-column gap-2" method="post">
            <div className='d-flex container-fluid justify-content-between form-top align-item-center'>
              New Message
            <a className='btn-close-box' onClick={() => setMessage(false)}>
                <Icon icon="ic:round-close" color="#2e89ff" width="24" height="24" />
                </a>
            </div>
              <div className='form-body'>
              <div class="form-floating">
                    <input type="text" name="name" id="name" class="form-control" required=""/>
                    <label for="name">Name</label>
                </div>
                <div class="form-floating">
                    <input type="text" name="lastName" id="lastName"  class="form-control"/>
                    <label for="lastName">Last name</label>
                </div>
                <div class="form-floating">
                    <input type="email" name="email" id='email' max="11" required="" pattern="(.+)@(\w+).(\w+)" class="form-control"/>
                    <label for="email">E-mail</label>
                </div>
                <div class="d-flex align-items-center"> 
                    <input type="text" name="email" max="11" required="" class="form-control input-message" placeholder="Aa"/>
                    <button type="submit" class=" btn-send ">
                    <Icon icon="ic:round-send" color="#0084ff" width="30" height="30" />
                    </button>
                </div>
              </div>

               
            </form>
      
    </>)
  }
  return (
    <>
      {/*  */}
      {showMessage ? null : <button className='btn-float-message' onClick={() => showOrHide(true)}>
      <Icon icon="entypo:new-message" color="#e4e6ea" width="24" height="24" />
      
      </button>}
      {showMessage ? form() : null}
      


      {/*  */}
      <div className="main-container container-fluid d-flex flex-column justify-content-start align-items-center gap-3 min-100-vh">
        {/* lightbox */}
    <div className='overlay' onClick={LigthBoxAction}>
      <img src='' className='overlay-img' />

      <button className='lightbox-close'><Icon icon="ion:close" color="#ededed" width="30" height="30" /></button>
    </div>
        {/* header */}
        <Header showMessage={showOrHide} />


     {/* main */}

     <Main/>
     {/* about */}
     <About/>

      </div>

    
			 
    </>
    
  );
}

export default App;
