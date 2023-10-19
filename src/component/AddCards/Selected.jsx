import { Link } from "react-router-dom";


const Selected = ({datas}) => {
    const {_id,name,shortdescription,brandname,type,price,rating,image}=datas;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img className="h-[200px] w-full" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">BrandName:{brandname}</h2>
    <p className="font-bold">{shortdescription}</p>
    <p className="font-bold">Type:{type}</p>
    <p className="font-bold">price:{price}</p>
    <span>rating:{rating}     <input type="radio" name="rating-9" className="mask mask-star-2" /></span>
    <div className="card-actions justify-end">
    <Link to={`updateShop/${_id}`}>
             <button className="btn">updated</button>
             </Link>
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Selected;