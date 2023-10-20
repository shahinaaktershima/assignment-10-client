import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Swal from "sweetalert2";


const Register = () => {
    const {createUser}=useContext(AuthContext);
    const [err,setErr]=useState('');
    const location=useLocation()
    const navigate=useNavigate();
    const handleSubmit=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)){
          setErr('your password should have one uppercase one lower case and one special character');
         }
        console.log(email,password);
        form.reset('');
        createUser(email,password)
        .then(result=>{
            console.log(result.user);
            if(result.user){
              Swal.fire({
                  title: 'Success!',
                  text: 'registered  Successfully',
                  icon: 'success',
                  confirmButtonText: 'Cool'
                })}
                navigate(location?.state?location.state:'/')
        })
        .catch(error=>{
            console.log(error);
            
        })
    
    
    
    }
    return (
        <div>
          <p className="text-center text-blue-600 text-2xl font-bold">{err}</p>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left ">
      <h1 className="text-5xl font-bold">Register now</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="email" className="input input-bordered" required />
        </div>
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
          <button className="btn btn-primary">Register</button>
        </div>
        <p>Already have an account? go to <Link className=" text-2xl text-blue-700" to='/login'>Login</Link></p>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;