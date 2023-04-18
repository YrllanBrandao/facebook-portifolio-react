import React, {useState} from "react";
import LigthBoxAction from "../../_assets/js/lightBox/lightBoxAction";
import Main from "../post/main";
import { Icon } from "@iconify/react";

const Home = ({}) =>{






                // 

                return (
                    <>
                      
                      {/*  */}
                      <div className="main-container container-fluid d-flex flex-column justify-content-start align-items-center gap-3 min-100-vh">
                        {/* lightbox */}
                    <div className='overlay' onClick={LigthBoxAction}>
                      <img src='' className='overlay-img' />
                
                      <button className='lightbox-close'><Icon icon="ion:close" color="#ededed" width="30" height="30" /></button>
                    </div>
                        {/* header */}
                      
                
                
                     {/* main */}
                
                     <Main/>
                      </div>
                
                    
                             
                    </>
                    
                  );

}


export default Home;