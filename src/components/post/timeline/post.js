import React from "react";
import profile from '../../../_assets/img/profile.jpg'
import data from  './data.json';
import Format from "../../../_assets/js/format";

const GenPosts = () => {

     function getPosts()
    {   
           
    const {...DATA} = data;
        return DATA.posts;
    }

    const result = getPosts();
    function getLink(link){

        const regex = /https:\/\/\w+\.\w+\/\w+\/*[a-z0-9-]*/gmi;
        const matched = link.match(regex);
        const linkMatched = matched[0];
        return linkMatched;
    }
    return(<>
        {result.map(post => {
            return (<>
                <div className="post d-flex flex-column semi-gap container-fluid ">
                <div className="d-flex container-fluid semi-gap pt-1 px-1">
                <img src={profile} alt="profile picture" className="post-picture"/>
                <div className="d-flex flex-column">
                <h2 className="post-profile-name">Yrlan Brandão</h2>
                <h3 className="post-date">{post.date}</h3>
                </div>
                </div>
                {/* post body */}
                <div className="post-body pb-1">
                    <p className="post-text p-1">
                        
                        {Format(JSON.stringify(post.text))}
                        <a className="link-post" target="_blank" href={getLink(JSON.stringify(post.text))}>{getLink(JSON.stringify(post.text))}</a>
                    </p>
                    <video className="container-fluid post-video"  controls poster={post.thumb}>
                        <source src={post.src} type="video/mp4" />
                        
                    </video>
                </div>
                </div>
            </>)    
        })}
    </>)
}

export default GenPosts