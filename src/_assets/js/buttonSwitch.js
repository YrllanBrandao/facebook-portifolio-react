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


  return;
};

export default buttonSwitch;
