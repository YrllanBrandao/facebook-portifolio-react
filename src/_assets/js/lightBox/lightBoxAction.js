

const LigthBoxAction = () =>{

    const overlay = document.querySelector(".overlay");
    const img = document.querySelector(".overlay-img");
    overlay.classList.remove("visible");
    img.classList.remove("visible");
    img.src = '';

}

export default LigthBoxAction;