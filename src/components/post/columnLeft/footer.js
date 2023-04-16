import React from "react";



const Footer = () =>{
    const date = new Date();
    return (<>
        <footer className="container-fluid  fs-6 text-white text-center pb-4" >Yrllan Brandão &copy; {date.getUTCFullYear()}</footer>
    </>)
}


export default Footer;