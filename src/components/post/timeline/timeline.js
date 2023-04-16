import React from "react";
import  GenPosts from "./post";
import Footer from "../columnLeft/footer";

const Timeline = () =>{

    return(<>
    
    <div className="timeline d-flex flex-column gap-3">
        <GenPosts/> 
        <br/>
        <br/>
    </div>
    
    </>)
}


export default Timeline;