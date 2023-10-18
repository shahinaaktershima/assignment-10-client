import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Brand from "./Brand";
import Carousel from "./Carousel";


const Home = () => {
    const datas=useLoaderData();
    return (
        <div>
           <Navbar></Navbar> 
           <Banner></Banner>
           <div className="grid grid-cols-3 gap-5 container mx-auto my-10">
            
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