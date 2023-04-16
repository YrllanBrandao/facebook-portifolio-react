import React from 'react';
import { Icon } from '@iconify/react';

const SocialNetwork = () =>{

    return (
        <>
        <div className='social-area p-2 d-flex flex-column semi-gap '>
            {/* Github */}
            <div className='social-network d-flex align-items-center semi-gap'>
            <Icon icon="mdi:github" color="#787979" width="30" height="30" /> <a href='https://github.com/YrllanBrandao/' target='_blank' className='link-info'>yrllanbrandao</a>
            </div>
            {/* codepen */}
            <div className='social-network d-flex align-items-center semi-gap'>
            <Icon icon="mdi:codepen" color="#787979" width="30" height="30" /> <a href='https://codepen.io/yrllan/' target='_blank' className='link-info'>@yrllan</a>
            </div>
            {/* Linkedin */}
            <div className='social-network d-flex align-items-center semi-gap'>
            <Icon icon="mdi:linkedin" color="#787979" width="30" height="30" /> <a href='https://www.linkedin.com/in/yrllanbrandao/' target='_blank' className='link-info'>yrllanbrandao</a>
            </div>
            {/* E-mail */}
            <div className='social-network d-flex align-items-center semi-gap'>
            <Icon icon="mdi:email" color="#787979" width="30" height="30" /><a  target='_blank' className='link-info'>yrllanbrandao@outlook.com</a>
            </div>
        </div>
        </>
    )
}

export default SocialNetwork;