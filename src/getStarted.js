import React from 'react';
import './App.css';

function GetStarted() {
  return (
    <div className="full_page" >
      <div className="container" >
    <div style={{margin:'auto 10%'}} className="justify-content-center align-item-center ">
     <h2 className="display-4 text-bolder text-black text-left" style={{fontWeight:800}}>Sign up</h2>
     <p className="small text-left">Get started with ease. Enter your details to start creating</p>
     <form className="form-group my-3 py-5" action="" method="POST" >
          <div className="form-group form-inline">
            <input type="text" name="fname" placeholder="First Name" className="form-control mr-1 form-lg w-25 form-control-lg" />
            <input type="text" name="lname" placeholder="Last Name"  className="form-control form-lg w-25 form-control-lg"/>
          </div>
          <div className="form-group form-inline">
            <input  className="form-control w-50 form-control-lg" type="text" name="email" placeholder="Email Address"/>
          </div>
          <div className="form-group form-inline">
            <input  className="form-control w-50 form-control-lg" type="text" name="username" placeholder="UserName"/>
          </div>
          <div className="form-group form-inline">
            <input  className="form-control w-50 form-control-lg" type="text" name="password" placeholder="Password"/>
          </div>
          <button className="btn btn-lg btn-black w-50 p-3 mt-5">Sign up</button>
          <p className="small">By signing up, you agree to our terms of use.</p>
     </form>
     </div>
     </div>
    </div>
  );
}

export default GetStarted;
