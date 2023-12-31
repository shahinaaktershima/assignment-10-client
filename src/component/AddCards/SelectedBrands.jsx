import Marquee from "react-fast-marquee";
import { useLoaderData } from "react-router-dom";
import Selected from "./Selected";
import { useState } from "react";




const SelectedBrands = () => {
    const data=useLoaderData();
   
    

    
    
    

    return (
        <div>
            <div>
           <Marquee>
          <img className="h-[250px]" src="https://i.postimg.cc/cLNwsQbq/image.png" alt="" />
          <img className="h-[250px]" src="https://i.postimg.cc/T2KthvTr/image.png" alt="" />
          <img className="h-[250px]" src="https://i.postimg.cc/yYdsDdkL/image.png" alt="" />
          <img className="h-[250px]" src="https://i.postimg.cc/1XX238J6/image.png" alt="" />
          </Marquee>
        </div>
        <div className="container mx-auto gap-5 my-10 grid md:grid-cols-2 grid-cols-1  lg:grid-cols-3">
        {
            data.map(datas=><Selected   datas={datas} key={datas._id}></Selected>)
        }
        </div>
        </div>
    );
};

export default SelectedBrands;