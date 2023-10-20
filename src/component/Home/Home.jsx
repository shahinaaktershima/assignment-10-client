import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";

import Brand from "./Brand";
import Carousel from "./Carousel";
import Extra from "./Extra";


const Home = () => {
    const datas=useLoaderData();
    // console.log(datas.length);
    return (
        <div>
            
           <Banner></Banner>
           <Extra></Extra>
           <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5 container mx-auto my-10">
            
            {
                datas.map(data=><Brand data={data} key={data.id}></Brand>)
            }
           </div>
           <Carousel></Carousel>
           <Footer></Footer>
        </div>
    );
};

export default Home;