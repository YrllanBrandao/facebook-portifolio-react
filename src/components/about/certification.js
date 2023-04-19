import React, {useState} from "react";
import LightBox from "../../_assets/js/lightBox/lightBox";
import Footer from "../post/columnLeft/footer";
import Html from '../../_assets/img/certification/html5.png';
import Cibersecurirty from '../../_assets/img/certification/cibersecurity_essencials.png'







const Certification = () =>{



    return (
      <>
      <section className='certification-area cecontainer-fluid d-flex flex-column align-items-center gap-3 justify-content-center'>

      <div className="certification d-flex flex-column">
          <div className="certification-area">
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


      </section>
       

        <Footer/>
       
      </>
    );

}


export default Certification;