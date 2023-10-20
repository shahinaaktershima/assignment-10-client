import { useLoaderData } from "react-router-dom";
import MyCard from "./MyCard";
import { useState } from "react";



const MyCards = () => {
    const data=useLoaderData();
    const [cardData,setCardData]=useState(data)
  
    
    console.log(data.length);
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 container mx-auto">
           {
            cardData.map(datas=><MyCard datas={datas}
                cardData={cardData}
                setCardData={setCardData}
                key={datas._id}></MyCard>)
           }
            
        </div>
    );
};

export default MyCards;