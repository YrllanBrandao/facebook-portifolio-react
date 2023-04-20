import React, {useState} from "react";
import LightBox from "../../_assets/js/lightBox/lightBox";
import LigthBoxAction from "../../_assets/js/lightBox/lightBoxAction";
import { Icon } from "@iconify/react";
import Footer from "../post/columnLeft/footer";
import Html from '../../_assets/img/certification/html5.png';
import Cibersecurirty from '../../_assets/img/certification/cibersecurity_essencials.png'







const Certification = () =>{



    return (
      <>
      <section className='certification-area cecontainer-fluid d-flex flex-column align-items-center gap-3 justify-content-center'>

      <div className="certification d-flex flex-column">
          <div className="certification-area d-flex flex-column gap">
            <h1 className="title">Licenses and certification</h1>
            <div className="container-fluid certification-list  d-flex gap">
              <img
                src={Html}
                alt="HTML certification"
                onClick={LightBox}
                className="certification-item lightbox"
                title=" HTML 5 Course"
              />

              <img
                src={Cibersecurirty}
                onClick={LightBox}
                alt="Cibersecurity essencials certification"
                title="cibersecurity Course"
                className="certification-item lightbox"
              />
            </div>
          </div>
        </div>
        <div className='overlay' onClick={LigthBoxAction}>
                      <img src='' className='overlay-img' />
                
                      <button className='lightbox-close'><Icon icon="ion:close" color="#ededed" width="30" height="30" /></button>
                    </div>

      </section>
       

        <Footer/>
       
      </>
    );

}


export default Certification;