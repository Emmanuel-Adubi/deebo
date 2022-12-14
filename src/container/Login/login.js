import React from 'react';
import '../../App.css';

function Login() {
  return (
    <div className="full_page container-fluid" style={{margin:'auto 20%'}}>
        <div className="container mx-auto">
     <h2 className="display-4 text-bolder text-black text-left" style={{fontWeight:800}}>Login</h2>
     <p className="small text-left">We keep your details safe, login securely</p>
     <form className="form-group my-3 py-5" action="" method="POST">
          
          <div className="form-group form-inline">
            <input  className="form-control w-50 form-control-lg" type="text" name="email" placeholder="Email Address"/>
          </div>
          <div className="form-group form-inline">
            <input  className="form-control w-50 form-control-lg" type="text" name="password" placeholder="Password"/>
          </div>
          <p className="small">Forgot password</p>
          <button className="btn btn-lg btn-black w-50 p-3 mt-5">Login</button>
     </form>
     
     </div>
    </div>
  );
}

export default Login;
