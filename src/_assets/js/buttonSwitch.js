import React, { useState } from "react";

const buttonSwitch = (e) => {

  const activeButton = () => {
    const BUTTON = e.target;
    BUTTON.classList.add("active");
  };
  const disableButtons = (e) => {
    const buttons = document.querySelectorAll(".btn-section");

    buttons.forEach((button) => {
      button.classList.remove("active");
    });
  };

  disableButtons();
  activeButton();

  //
  const BUTTON = e.target;
  const TARGET = BUTTON.dataset.target;

  const SECTIONS = document.querySelectorAll(".views");
  const certification = document.querySelector(".certification");

  function handlerCertificationSection ()
  {
    if(TARGET == "about")
      {
        certification.classList.add("active");
      }
      if(TARGET == "post")
      {
        certification.classList.remove("active");
      }
  }
  function hiddenSections() {
    
    SECTIONS[0].classList.remove("active");
    SECTIONS[1].classList.remove("active");
    
  }

  hiddenSections();
  SECTIONS.forEach((section) => {
    if (section !== undefined && section !== null) {
      if (section.classList.contains(TARGET)) {
        section.classList.add("active");
      }
     
      handlerCertificationSection();
    }

  
  });

  return;
};

export default buttonSwitch;
