import React from "react";
import ColumnLeft from './columnLeft/columnLeft';
import Timeline from "./timeline/timeline";
const Main = () =>{

    return(
        <>
        <main className='post d-flex gap-3  sticky-top views active border-danger' >
          <ColumnLeft/>
          <Timeline />
        </main>
        
        </>
    )
}

export default Main;