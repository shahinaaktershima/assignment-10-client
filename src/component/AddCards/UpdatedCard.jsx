import { useLoaderData } from "react-router-dom";


const UpdatedCard = () => {
    const update=useLoaderData();
    const {name,shortdescription,brandname,type,price,rating,image,_id}=update;
    console.log(_id);
    return (
        <div>
            <h2>{_id}</h2>
        </div>
    );
};

export default UpdatedCard;