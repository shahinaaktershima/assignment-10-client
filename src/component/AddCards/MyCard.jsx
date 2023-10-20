import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyCard = ({datas,cardData,setCardData}) => {
    const {_id,name,shortdescription,brandname,type,price,rating,image}=datas;
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5001/shop/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = cardData.filter(cof => cof._id !== _id);
                            setCardData(remaining);
                        }
                    })

            }
        })
    }
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
<Link to={`/updateshop/${_id}`}>
         <button className="btn">updated</button>
         </Link>
         <Link><button onClick={()=>handleDelete(_id)} className="btn">delete</button></Link>
         
</div>
</div>
</div>
    </div>
    );
};

export default MyCard;