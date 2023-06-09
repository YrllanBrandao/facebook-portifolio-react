import React from 'react';
import Projects from './projects';
import Skills from './skills';
import SocialNetwork from './socialNetwork';

import { Icon } from '@iconify/react';



const ColumnLeft = () =>{
    return(
        <>
        <aside className='column-left d-flex flex-column p-1 sticky-top'>
        <div className='intro p-2'>
            <h2 className='fs-4 text-white fw-bold'>
                Intro
            </h2>
            <p className='fs-6 text-light  pb-2'>
            Back-end developer
            </p>
        </div>
        {/* socil area */}

        <SocialNetwork/>
        {/* skills */}

        <Skills/>

        {/* any projets */}
        <Projects/>
        

    
       
        </aside>
        
        </>
    )
}

export default ColumnLeft;
