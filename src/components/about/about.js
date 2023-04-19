import React, {useState} from 'react';
import Certification from './certification';
import { Icon } from '@iconify/react';
import Message from '../message';

const About = () =>{
        

    const hideLists = () => {
      const lists = document.querySelectorAll(".list");

      for (const list of lists) {
        list.classList.remove("active");
      }
    };
    const disableButtons = () => {
      const buttons = document.querySelectorAll(".btn-about");

      for (const button of buttons) {
        button.classList.remove("active");
      }
    };
    const showOverview = (event) => {
      disableButtons();
      hideLists();

      hideLists();
      const button = event.target;
      const overview = document.querySelector(".list-overview");

      overview.classList.add("active");
      button.classList.add("active");
    };
    const showInfo = (event) => {
      disableButtons();
      hideLists();
      const button = event.target;
      const info = document.querySelector(".list-info");
      info.classList.add("active");
      button.classList.add("active");
    };


    

    return(<>


                      

    {/* about */}
   <div className='container-about container-fluid border-success'>
   <section className='container-fluid d-flex justify-content-start   about  views p-1' id='about' >
    
      
   
    <div className='aboutList p-1'>
     <a href='#about' className='container-fluid fs-6 link-about p-1'>About</a>
      <button className='btn-about active' onClick={showOverview}>Overview</button>
      <button className='btn-about ' onClick={showInfo}>Contact and Basic info</button>

      </div>
      
  
      <ul className='d-flex flex-column p-1 list-overview list active'>
      <li><Icon icon="uil:bag" color="#b0b3b8" width="30" height="30" /> Available</li>
      <li><Icon icon="fa-solid:graduation-cap" color="#838589" width="30" height="30" /> Network Technologist</li>
      <li><Icon icon="ion:home" color="#838589" width="30" height="30" /> Lives in <a href='https://www.portal.ap.gov.br/conheca/macapa' target='_blank' className='fw- link-white'>Macapá-Ap</a> </li>
      </ul>
      <ul className='d-flex flex-column list-info list list p-1'>
      <li className=''>
          <ul className='sub-list'>
          Contact info
              <li><Icon icon="ic:baseline-email" color="#838589" width="30" height="30" /> yrllanbrandao@outlook.com</li>
          </ul>
          
      </li>
      <li>
      <ul className='sub-list d-flex flex-column semi-gap '>
          Websites and social links
              <li><Icon icon="mdi:linkedin" color="#838589" width="30" height="30" /> 
              <div className='d-flex flex-column semi-gap'><a className='network-name'> yrllanbrandao</a> <span className='social-network'>Linkedin</span></div>
              </li>

              <li>
                  <Icon icon="mdi:github" color="#838589" width="30" height="30" />
                  <div className='d-flex flex-column semi-gap'><a className='network-name'> yrllanbrandao</a> <span className='social-network'>Github</span></div>
              </li>
              <li>
              <Icon icon="dashicons:admin-site-alt" color="#838589" width="30" height="30" />
                  <div className='d-flex flex-column semi-gap'><a className='network-name' href='https://yrllanbrandao.me'> yrllanbrandao.me</a> <span className='social-network fs-7'>Portifolio</span></div>
              </li>
          </ul>
      </li>
      </ul>

    

      
  </section>
      
  
      {/* videos */}
      <Certification/>
      
  
   </div>
    </>)
}

export default About;