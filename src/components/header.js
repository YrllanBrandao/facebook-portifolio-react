import React from "react";
import profile  from '../_assets/img/profile.jpg';
import { Icon } from '@iconify/react';
import { Link, useLocation} from "react-router-dom";

const Header = (props) =>{


    function nav(path)
    {
        
        switch(path)
        {
            case '/':

        return(<>
        <nav className="nav-section container-fluid d-flex gap-1 justify-content-start align-items-end align-self-end">
                    <Link to='/' className="btn-section active" data-target="post"  >Post</Link>
                    <Link to="/about" className="btn-section" data-target="about"  >About me</Link>
                    
                    </nav>
        </>)

            case '/about':
                return (<>
                <nav className="nav-section container-fluid d-flex gap-1 justify-content-start align-items-end align-self-end">
                    <Link to='/' className="btn-section " data-target="post"  >Post</Link>
                    <Link to="/about" className="btn-section active" data-target="about"  >About me</Link>
                    
                    </nav></>)
        }
    }

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
                {nav(useLocation().pathname)}
                    

                
            </div>
        </div>

        </header>
      {/* CONTENT */}
      
        </>
    )
}


export default Header;