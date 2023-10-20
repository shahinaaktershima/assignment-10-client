import { useContext } from "react";
import { AuthContext } from "../login/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PriveteRoutes = ({children}) => {
    const{user,loading}=useContext(AuthContext);
    const location=useLocation()
    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }
    if(user){
        return children
    }
    return <Navigate state={location?.pathname} to='/login'></Navigate >;
};

export default PriveteRoutes;