import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Details = () => {
    const cards=useLoaderData()
    const {name,shortdescription,brandname,type,price,rating,image,_id}=cards;
    console.log(_id,name);
    const handleClick=()=>{
        fetch('https://brand-shop-server-g2onem2a6-shahinaaktershimas-projects.vercel.app/shop', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cards)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Card Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
                
            })
    
    }
    return (
        <div className="container mx-auto">
            <div className="card card-compact bg-base-100 shadow-xl">
<figure><img className="h-[400px] w-3/4" src={image} alt="Shoes" /></figure>
<div className="card-body">
<h2 className="card-title">BrandName:{brandname}</h2>
<p className="font-bold">{shortdescription}</p>
<p className="font-bold">Type:{type}</p>
<p className="font-bold">price:{price}</p>
<span>rating:{rating}     <input type="radio" name="rating-9" className="mask mask-star-2" /></span>
<div className="card-actions justify-end">
<Link onClick={handleClick}>
         <button className="btn">add to card</button>
         </Link>
       
</div>
</div>
</div>
        </div>
    );
};

export default Details;