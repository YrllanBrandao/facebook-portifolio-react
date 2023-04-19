import React from 'react';
import { Icon } from '@iconify/react';

const Skills = () =>{

    return(
        <>
        <div className='area-skill p-2'>
            <div className='col d-flex flex-column semi-gap'>
                {/* node.js */}
                <a className='skill-tag'>
                <Icon icon="vscode-icons:file-type-node" color="#787979" width="24" height="24" /> Node.js
                </a>
                {/* express js */}
                <a className='skill-tag'>
                <Icon icon="skill-icons:expressjs-dark" color="#787979" width="24" height="24" /> Express.js
                </a>
                {/* typeScript */}
                <a className='skill-tag'>
                <Icon icon="logos:typescript-icon" color="#787979" width="24" height="24" /> Typescript
                </a>
                 {/* MySql */}
                 <a className='skill-tag'>
                 <Icon icon="vscode-icons:file-type-mysql" color="#787979" width="24" height="24" /> Mysql
                </a>
                {/* Docker */}
                <a className='skill-tag'>
                <Icon icon="logos:docker-icon" color="#787979" width="24" height="24" /> Docker
                </a>
                 {/* Linux */}
                 <a className='skill-tag'>
                 <Icon icon="skill-icons:linux-dark" color="#787979" width="24" height="24" /> Linux
                </a>
            </div>
            <div className='col d-flex flex-column semi-gap'>
                {/* javascript */}
                <a className='skill-tag'>
                <Icon icon="skill-icons:javascript" color="#787979" width="24" height="24" /> JavaScript
                </a>
                {/* EJS */}
                <a className='skill-tag'>
                <Icon icon="vscode-icons:file-type-ejs" color="#787979" width="24" height="24" /> EJS
                </a>
                {/* HTML 5 */}
                <a className='skill-tag'>
              
                <Icon icon="vscode-icons:file-type-html" color="#787979" width="24" height="24" /> Html 5
                </a>

                {/* css 3 */}
                <a className='skill-tag'>
                <Icon icon="vscode-icons:file-type-css" color="#787979" width="24" height="24" /> Css 3
                </a>
                {/* bootstrap */}
                <a className='skill-tag'>
                <Icon icon="logos:bootstrap" color="#787979" width="24" height="24" /> Bootstrap
                </a>
                 {/* React */}
                 <a className='skill-tag'>
                 <Icon icon="skill-icons:react-dark" color="#787979" width="24" height="24" /> React
                </a>
            </div>
        </div>
        
        </>
    )
}

export default Skills;