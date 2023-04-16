import React, {useState} from "react";
import profile  from '../_assets/img/profile.jpg';
import buttonSwitch from "../_assets/js/buttonSwitch";

import { Icon } from '@iconify/react';

const Header = (props) =>{



    return(
        <>
        <header>

        <div className="header-main container-fluid d-flex flex-column align-items-center ">
            <div className="cover">

            </div>
            <div className="container-fluid  d-flex flex-column align-items-center sub-header">
                    <div className="picture-area d-flex align-items-center justify-content-between">
                        <div className="d-flex gap-1 pic-profile-area">
                        <img src={profile}  className="profile-picture" />
                        <h1 className="text-name align-self-center">Yrllan Brandão</h1>
                        </div>

                        <div className="button-area d-flex gap-1 align-items-center">
                        <button className="btn bg-fb btn-header fs-6"  onClick={()=> props.showMessage()}> <Icon icon="ri:message-3-line" color="white" width="24" height="24"  /> Message</button>
                        <a href="./resume.pdf" className="btn btn-header bg-light link-black fs-6" download={true}><Icon icon="simple-line-icons:doc" color="#000000" width="24" height="24" /> Resume</a>
                    </div>
                    </div>


                    {/* section buttons*/}
                    <nav className="nav-section container-fluid d-flex gap-1 justify-content-start align-items-end align-self-end">
                    <button className="btn-section active" data-target="post" onClick={buttonSwitch} >Post</button>
                    <button className="btn-section" data-target="about" onClick={buttonSwitch} >About me</button>
                    
                    </nav>
                    

                
            </div>
        </div>

        </header>
      {/* CONTENT */}
      
        </>
    )
}


export default Header;