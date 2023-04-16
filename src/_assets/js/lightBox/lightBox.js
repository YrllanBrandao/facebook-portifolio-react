

const LightBox = (e) =>{
    const overlay = document.querySelector(".overlay");
    const img = document.querySelector(".overlay-img");

        e.preventDefault()
    
    const src = e.target.src;
    img.src = src;

    overlay.classList.add("visible")
    img.classList.add("visible")

}

export default LightBox;