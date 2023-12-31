import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
    const {logIn,google}=useContext(AuthContext);
    const [err,setErr]=useState("");
    const location=useLocation();
    const navigate=useNavigate();
    const handleSubmit=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
        form.reset('');
        logIn(email,password)
        .then(result=>{
            console.log(result.user);
           
            if(result.user){
              Swal.fire({
                  title: 'Success!',
                  text: 'loged in  Successfully',
                  icon: 'success',
                  confirmButtonText: 'Cool'
                })
          }
          navigate(location?.state?location.state:'/')
          
        })
        .catch(error=>{
            console.log(error);
            setErr("your password doesn't match .please provide the right password");
        })
    
    
    
    }

    const handleLogWithGoogle=()=>{
        google()
        .then(result=>{
            console.log(result.user);
            if(result.user){
              Swal.fire({
                  title: 'Success!',
                  text: 'loged in  Successfully',
                  icon: 'success',
                  confirmButtonText: 'Cool'
                })
          }
          navigate(location?.state?location.state:'/')
        })
        .then(error=>{
            console.log(error);
            setErr("your password doesn't match .please provide the right password");
        })
    }
    return (
        <div>
          <p className="text-center text-blue-600 text-2xl font-bold">{err}</p>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left ">
      <h1 className="text-5xl font-bold">Log in now</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">login</button>
        </div>
        <p>Don't have an account?please go to <Link className=" text-2xl text-blue-700" to='/register'>Register</Link></p>
      </form>
      <div className="text-center my-3 ">
        <button onClick={handleLogWithGoogle} className="btn bg-green-500 text-black font-bold"><Link>Log in with Google</Link></button>
    </div>
    </div>
   
  </div>
 
</div>

        </div>
    );
};

export default Login;