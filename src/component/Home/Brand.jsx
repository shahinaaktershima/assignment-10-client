import { Link } from "react-router-dom";


const Brand = ({data}) => {
    const {id,brand_name,brand_image}=data
    return (
        <Link>
        <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img className="w-full h-[200px]" src={brand_image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{brand_name}</h2>
  </div>
</div>
        </Link>
    );
};

export default Brand;