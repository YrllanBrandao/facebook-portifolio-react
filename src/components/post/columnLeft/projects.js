import React from "react";
import { Icon } from "@iconify/react";
import classmanager from "../../../_assets/img/projects/classmanager.png";
import myanimes from "../../../_assets/img/projects/myanimes.jpeg";
import trivia from '../../../_assets/img/projects/trivia.png';
const Projects = () => {
  return (
    <>
      <div className="project-area p-2 gap">
        {/* project 01 */}

        <div className="project" data-name="MyAnimes">
          <img src={myanimes} className="project-thumb"  />
          <a className="project-link">
            Source
            <Icon icon="mdi:github" color="white" width="24" height="24" />
          </a>
        </div>

        {/* project 02 */}
        <div className="project d-flex flex-column align-item-center" data-name="Class Manager">
          <img src={classmanager} className="project-thumb" />
          <a className="project-link">
            Source
            <Icon icon="mdi:github" color="white" width="24" height="24" />
          </a>
        </div>

        {/* project 03 */}

        <div className="project" data-name="Trivia Game">
          <img src={trivia} className="project-thumb"   />
          <a className="project-link">
            Source
            <Icon icon="mdi:github" color="white" width="24" height="24" />
          </a>
        </div>

       
      </div>
    </>
  );
};

export default Projects;
