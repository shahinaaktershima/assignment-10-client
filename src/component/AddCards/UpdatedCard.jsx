import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdatedCard = () => {
    const cards=useLoaderData()
    const {name,shortdescription,brandname,type,price,rating,image,_id}=cards;
    console.log(_id,name);
    const handleClick=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const shortdescription=form.shortdescription.value;
        const brandname=form.brandname.value;
        const type=form.type.value;
        const price=form.price.value;
        const rating=form.rating.value;
        const image=form.image.value;
        form.reset('')
        const updatedValue={name,shortdescription,brandname,type,price,rating,image}
        console.log(updatedValue);
    
        fetch(`http://localhost:5001/shop/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedValue)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    
    }

    return (
        <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold">Update Products</h2>
        <form onSubmit={handleClick} >
            {/* form name  row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text"> Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" defaultValue={name} placeholder="Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Short description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" defaultValue={shortdescription}  name="shortdescription" placeholder="shortdescription" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form Brand name row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="brandname" placeholder="brand Name" defaultValue={brandname}     className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Type</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="type" defaultValue={type} placeholder="type" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form price row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="price" defaultValue={price} placeholder="price" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">
                    <input type="" name="rating" defaultValue={rating} className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* form Photo url row */}
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="image" placeholder="image url" defaultValue={image} className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <input  type="submit" value="Submit" className="btn btn-block" />

        </form>
    </div>
    );
};

export default UpdatedCard;