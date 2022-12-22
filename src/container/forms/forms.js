import React from 'react';
import '../../App.css';
import '../forms/form.css';

function Forms() {
  return (
    <div>
            <div class="full_page container">
      <section class="border-dark container">
        <nav class="navbar navbar-light bg-light">
          <form class="container-fluid">
            <div class="input-group">
              <input type="text" class="form-control border-dark"
                placeholder="Search for Polls and candidates"
                aria-label="search" aria-describedby="basic-addon1"/>
              <button class="btn btn-black ml-2 " type="button">Search</button>
            </div>
          </form>
        </nav>
      </section>

      <section class="container">
        <p class="lead text-center pt-3">Pick your goal for today.</p>
        <div class="row justify-content-center">
          <div class="col-lg-4 colo-md-4 col-sm-4 col-12 my-4">
            <div class="card text-white bg-transparent shadow">
              <div class="zoom zoom-bordered p-1">
                <img class="card-img-top img img-fluid"src="assets/img/pexels-lukas-rodriguez-3618162@2x.png"
                  alt=""/>
              </div>
              <div class="card-body m-0 p-0">
                <p class="card-title text-dark text-center lead p-2">Create
                  Polls</p>
                <button type="button" class="btn btn-black w-100 m-0 p-3 btn-lg">Get
                  started</button>
              </div>
            </div>
          </div>
          <div class="col-lg-4 colo-md-4 col-sm-4 col-12 my-4">
            <div class="card text-white bg-transparent">
              <div class="zoom p-1">
                <img class="card-img-top img img-fluid"src="assets/img/pexels-sora-shimazaki-5926280@2x.png"
                  alt=""/>
              </div>
              <div class="card-body m-0 p-0">
                <p class="card-title text-dark text-center lead p-2">Votes</p>
                <button type="button" class="btn btn-black w-100 m-0 p-3 btn-lg">Get
                  started</button>
              </div>
            </div>
          </div>
          <div class="col-lg-4 colo-md-4 col-sm-4 col-12 my-4">
            <div class="card text-white bg-transparent">
              <div class="zoom p-1">
                <img class="card-img-top img img-fluid"src="assets/img/pexels-cottonbro-5801657@2x.png"
                  alt=""/>
              </div>
              <div class="card-body m-0 p-0">
                <p class="card-title text-dark text-center lead p-2">Get
                  Forms/Tickets</p>
                <button type="button" class="btn btn-black w-100 m-0 p-3 btn-lg">Get
                  started</button>
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>
    <section class="bg-img container">
      <h1 class="display-4 text-white text-center p-3">BROWSE</h1>
      <p class="text-center lead text-white"><b>Explore the vast range of events
          & competitions happening right now</b></p>
      <div class="container-fluid">
        <div id="carouselExample" class="carousel slide justify-content-center"
          data-ride="carousel" data-interval="9000">
          <div class="carousel-inner row w-100 mx-auto" role="listbox">
            <div class="carousel-item col-md-3 active">
              <div class="panel panel-default">
                <div class="panel-thumbnail">
                  <a href="#" title="image 1" class="thumb">
                    <div class="zoom p-1">
                      <img class="img img-fluid mx-auto d-block "
                        src="assets/img/Mask Group 1@2x.png" alt="slide 1"/>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="carousel-item col-md-3">
              <div class="panel panel-default">
                <div class="panel-thumbnail">
                  <a href="#" title="image 3" class="thumb">
                    <div class="zoom p-1">
                      <img class="img img-fluid mx-auto d-block"
                        src="assets/img/Mask Group 1@2x.png" alt="slide 1"/>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="carousel-item col-md-3">
              <div class="panel panel-default">
                <div class="panel-thumbnail">
                  <a href="#" title="image 4" class="thumb">
                    <div class="zoom p-1">
                      <img class="img img-fluid mx-auto d-block"
                        src="assets/img/Mask Group 1@2x.png" alt="slide 1"/>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="carousel-item col-md-3">
              <div class="panel panel-default">
                <div class="panel-thumbnail">
                  <a href="#" title="image 5" class="thumb">
                    <div class="zoom p-1">
                      <img class="img img-fluid mx-auto d-block"
                        src="assets/img/Mask Group 1@2x.png" alt="slide 1"/>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="carousel-item col-md-3">
              <div class="panel panel-default">
                <div class="panel-thumbnail">
                  <a href="#" title="image 6" class="thumb">
                    <div class="zoom p-1">
                      <img class="img img-fluid mx-auto d-block"
                        src="assets/img/Mask Group 1@2x.png" alt="slide 1"/>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="carousel-item col-md-3">
              <div class="panel panel-default">
                <div class="panel-thumbnail">
                  <a href="#" title="image 7" class="thumb">
                    <div class="zoom p-1">
                      <img class="img img-fluid mx-auto d-block"
                        src="assets/img/Mask Group 1@2x.png" alt="slide 1"/>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="carousel-item col-md-3">
              <div class="panel panel-default">
                <div class="panel-thumbnail">
                  <a href="#" title="image 8" class="thumb">
                    <div class="zoom p-1">
                      <img class="img img-fluid mx-auto d-block"
                        src="assets/img/Mask Group 1@2x.png" alt="slide 1"/>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="carousel-item col-md-3">
              <div class="panel panel-default">
                <div class="panel-thumbnail">
                  <a href="#" title="image 2" class="thumb">
                    <div class="zoom p-1">
                      <img class="img img-fluid mx-auto d-block"
                        src="assets/img/Mask Group 1@2x.png" alt="slide 1"/>
                    </div>
                  </a>
                </div>

              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExample" role="button"
            data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next text-faded" href="#carouselExample"
            role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>

    <section class="bg-fixed justify-content-center container">
      <h3 class="h3 text-center p-5"><b>Explore More</b></h3>
      <div class="navbar navbar-nav navbar-inverse p-3">
        <ul class="d-flex list-inline">
          <li class="list-inline-item"><a href="index.html">EVENTS</a></li>
          <li class="list-inline-item px-5"><a href="contests.html">CONTESTS</a></li>
          <li class="list-inline-item"><a href="#">FORMS</a></li>
        </ul>
      </div>

      <div class="row justify-content-center mb-5">
        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
          <div class="card text-white bg-white  shadow">
            <div class="zoom p-1">
              <img class="img img-fluid card-img-top img-bordered"
                src="assets/img/Quilox-exterior@2x.png" alt=""/>
            </div>
            <div class="card-body" style={{fontSize: '10px'}}>
              <div class="row text-dark">
                <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                  <h6 class="h6" style={{fontSize: '10px'}}><b>Laff Matters 10.0</b> </h6>
                  <p class="small">location Porthacult</p>
                  <br/>
                  <button class="btn btn-outline-black small  btn-sm p-2 my-0">Get Ticket</button>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                <button class="btn btn-outline-primary small btn-sm  my-0">Verified</button>
                <p>February, 25, 2021</p>
                <p class="small">From <br/>
                <span class="lead text-primary" style={{fontSize: '10px'}}>N5,000.00</span> 
                </p>
                
              </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-12 ">
          <div class="card text-white bg-white shadow">
            <div class="zoom p-1">
              <img class="img img-fluid card-img-top img-bordered"
                src="assets/img/images-11.png" alt=""/>
            </div>
            <div class="card-body " style={{fontSize: '10px'}}>
              <div class="row text-dark">
                <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                  <h6 class="h6" style={{fontSize: '10px'}}><b>Laff Matters 10.0</b> </h6>
                  <p class="small">location Porthacult</p>
                  <br/>
                  <button class="btn btn-outline-black small  btn-sm my-0">Get Ticket</button>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                <button class="btn btn-outline-primary small btn-sm  my-0">Verified</button>
                <p>February, 25, 2021</p>
                <p class="small">From <br/>
                <span class="lead text-primary" style={{fontSize: '10px'}}>N5,000.00</span> 
                </p>
                
              </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-12 ">
          <div class="card text-white bg-white shadow">
            <div class="zoom p-1">
              <img class="img img-fluid card-img-top img-bordered"
                src="assets/img/images-4@2x.png" alt=""/>
            </div>
            <div class="card-body" style={{fontSize: '10px'}}>
              <div class="row text-dark">
                <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                  <h6 class="h6" style={{fontSize: '10px'}}><b>Laff Matters 10.0</b> </h6>
                  <p class="small">location Porthacult</p>
                  <br/>
                  <button class="btn btn-outline-black small  btn-sm my-0">Get Ticket</button>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                <button class="btn btn-outline-primary small btn-sm  my-0">Verified</button>
                <p>February, 25, 2021</p>
                <p class="small">From <br/>
                <span class="lead text-primary" style={{fontSize: '10px'}}>N5,000.00</span> 
                </p>
                
              </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-12 ">
          <div class="card text-white bg-white shadow">
            <div class="zoom p-1">
              <img class="img img-fluid card-img-top img-bordered"
                src="assets/img/images-6@2x.png" alt=""/>
            </div>
            <div class="card-body" style={{fontSize: '10px'}}>
              <div class="row text-dark">
                <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                  <h6 class="h6" style={{fontSize: '10px'}}><b>Laff Matters 10.0</b> </h6>
                  <p class="small">location Porthacult</p>
                  <br/>
                  <button class="btn btn-outline-black small  btn-sm my-0">Get Ticket</button>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                <button class="btn btn-outline-primary small btn-sm  my-0">Verified</button>
                <p>February, 25, 2021</p>
                <p class="small">From <br/>
                <span class="lead text-primary" style={{fontSize: '10px'}}>N5,000.00</span> 
                </p>
                
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-3 col-md-6 col-sm-6 col-12 ">
          <div class="card text-white bg-white shadow">
            <div class="zoom p-1">
              <img class="img img-fluid card-img-top img-bordered"
                src="assets/img/images-3@2x.png" alt=""/>
            </div>
            <div class="card-body" style={{fontSize: '10px'}}>
              <div class="row text-dark">
                <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                  <h6 class="h6" style={{fontSize: '10px'}}><b>Laff Matters 10.0</b> </h6>
                  <p class="small">location Porthacult</p>
                  <br/>
                  <button class="btn btn-outline-black small  btn-sm  my-0">Get Ticket</button>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                <button class="btn btn-outline-primary small btn-sm  my-0">Verified</button>
                <p>February, 25, 2021</p>
                <p class="small">From <br/>
                <span class="lead text-primary" style={{fontSize: '10px'}}>N5,000.00</span> 
                </p>
                
              </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-12 ">
          <div class="card text-white bg-white shadow">
            <div class="zoom p-1">
              <img class="img img-fluid card-img-top img-bordered"
                src="assets/img/images-8@2x.png" alt=""/>
            </div>
            <div class="card-body" style={{fontSize: '10px'}}>
              <div class="row text-dark">
                <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                  <h6 class="h6" style={{fontSize: '10px'}}><b>Laff Matters 10.0</b> </h6>
                  <p class="small">location Porthacult</p>
                  <br/>
                  <button class="btn btn-outline-black small  btn-sm my-0">Get Ticket</button>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                <button class="btn btn-outline-primary small btn-sm  my-0">Verified</button>
                <p>February, 25, 2021</p>
                <p class="small">From <br/>
                <span class="lead text-primary" style={{fontSize: '10px'}}>N5,000.00</span> 
                </p>
                
              </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-12 ">
          <div class="card text-white bg-white shadow">
            <div class="zoom p-1">
              <img class="img img-fluid card-img-top img-bordered"
                src="assets/img/images-5@2x.png" alt=""/>
            </div>
            <div class="card-body" style={{fontSize: '10px'}}>
              <div class="row text-dark">
                <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                  <h6 class="h6" style={{fontSize: '10px'}}><b>Laff Matters 10.0</b> </h6>
                  <p class="small">location Porthacult</p>
                  <br/>
                  <button class="btn btn-outline-black small  btn-sm my-0">Get Ticket</button>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                <button class="btn btn-outline-primary small btn-sm  my-0">Verified</button>
                <p>February, 25, 2021</p>
                <p class="small">From <br/>
                <span class="lead text-primary" style={{fontSize: '10px'}}>N5,000.00</span> 
                </p>
                
              </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-12 ">
          <div class="card text-white bg-white shadow">
            <div class="zoom p-1">
              <img class="img img-fluid card-img-top img-bordered"
                src="assets/img/acceleratetv@2x.png" alt=""/>
            </div>
            <div class="card-body" style={{fontSize: '10px'}}>
              <div class="row text-dark">
                <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                  <h6 class="h6" style={{fontSize: '10px'}}><b><b>Laff Matters 10.0</b> </b></h6>
                  <p class="small">location Porthacult</p>
                  <br/>
                  <button class="btn btn-outline-black small  btn-sm my-0">Get Ticket</button>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                <button class="btn btn-outline-primary small btn-sm  my-0">Verified</button>
                <p>February, 25, 2021</p>
                <p class="small">From <br/>
                <span class="lead text-primary" style={{fontSize: '10px'}}>N5,000.00</span> 
                </p>
                
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Forms;
