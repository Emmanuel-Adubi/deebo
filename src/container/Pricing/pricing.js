import React from 'react';
import '../../App.css';

function Pricing() {
  return (
    <div>
            <div class="row text-center container mx-auto">
              <div class="col-lg-12 col-md-12 col-sm-12 col-12 ">
                <h1 class="display-4 text-black font-weight-bolder">Pricing</h1>
                <p class="text-black">own and manage your processes all in one place.</p>
              </div>
            </div>
            <div class="row container mx-auto p-5 justify-content-center">
              <div class="col-lg-5 col-md-5 col-sm-12 col-12 bg-white img-bordered w-100 m-3 p-3 w-50-lg" >
                <h3 class="h3 font-weight-bolder text-center lead">Standard</h3>
                <p class="text-center small">For occassional users and small/medium enterprise</p>
                <h3 class="h3 font-weight-bolder text-center">Pay as you go</h3>
                    <ul class="list-group p-3">
                      <li class="list-group-item">Custom voting fees</li>
                      <li class="list-group-item">10 Free polls(limited)</li>
                      <li class="list-group-item">10 Free forms(limited)</li>
                      <li class="list-group-item">Sell your events tickets</li>
                      <li class="list-group-item">Sell entry forms</li>
                      <li class="list-group-item">Host your contest at your own prices</li>
                      <li class="list-group-item">Receive quota payment on your sales</li>
                      <li class="list-group-item">10% discount for first 2 voting contest charges</li>
                    </ul>
                    <div class="container text-center">
                      <button class="btn btn-primary w-75" style={{background:'#0479b7'}}>
                        Get started
                      </button>
                    </div>
                  </div>
                  <div class="col-lg-5 col-md-5 col-sm-12 col-12 bg-white img-bordered  m-2 p-3 w-100">
                    <h3 class="h3 font-weight-bolder text-center lead">Enterprise</h3>
                    <p class="text-center small">For recuring users and all types of organisation</p>
                    <h3 class="h3 font-weight-bolder text-center">NGN 40, 000.00</h3>
                        <ul class="list-group p-3">
                          <li class="list-group-item">Custom voting fees</li>
                          <li class="list-group-item">10 Free polls(All categories)</li>
                          <li class="list-group-item">10 Free forms(All categories)</li>
                          <li class="list-group-item">Sell your events tickets</li>
                          <li class="list-group-item">Sell entry forms</li>
                          <li class="list-group-item">Host your contest at your own prices</li>
                          <li class="list-group-item">Receive quota payment on your sales</li>
                          <li class="list-group-item">10% discount for first 2 voting contest charges</li>
                        </ul>
                        <div class="container text-center">
                          <button class="btn btn-primary w-75" style={{background:'#0479b7'}}>
                            Get started
                          </button>
                        </div>
                      </div>
                  </div>
              
           
                
            <div class="container">
              <div class="row m-2 p-3 w-100 flex-shrink-0|1">
                <div class="col-lg-3 col-md-3 col-sm-6 col-12">
                  <h3 class="display-3 bold" style={{fontWeight:600}}>A Little About Us</h3>
                </div>
                <div class="col-lg-8 col-md-8 col-sm-6 col-12 relative p-3" style={{position:'relative'}} >
                  <img src="assets/img/03-the-johnnie-walker-story-heritage@2x.png" class="img-fluid img-bordered img-responsive w-25" alt="" height="100" width="100" style={{zIndex:1,  position:'absolute;'}} />
                  <img src="assets/img/pexels-photo-2833037@2x.png" class="img-fluid img-bordered img-responsive w-25  z-2" alt="" height="100" width="100" style={{zIndex:2,  position:'absolute;'}} />
                  <img src="assets/img/34bae0cd967bd88d889349a23b8bc3b4@2x.png" class="img-fluid img-bordered img-responsive w-25 " alt="" height="100" width="100" style={{zIndex:-2, marginTop:'200px', position:'absolute;'}} />
                  <img src="assets/img/bdd570959caf72a5a352c1498e7413e4@2x.png" class="img-fluid img-bordered img-responsive w-25" alt="" height="100" width="100" style={{zIndex:1, position:'absolute'}} />
                </div>
              </div>
            </div>
          </div>
  );
}

export default Pricing;
