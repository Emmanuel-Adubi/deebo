import '../../App.css';
import { Link } from 'react-router-dom'

const Voting = () => {
  return (
    <div>
        <div class="bg-white container">
        <section class="bg-img container p-5">
            <p class="lead text-white">Popular contest: March 01,2021 <span class="justify-content-end">S</span></p>
            <div class="container-fluid justify-content-center text-center">
                <h1 class="display-4 text-white text-center p-3" style={{fontWeight:500}}>MBGN 2020</h1>
                    <p class="text-center lead text-white"><b>Explore the vast range of events <br/>
                        and competitions happening right now</b></p>
                        <button class="btn btn-outline-light btn-lg w-50 d-block mx-auto text-white">Vote now</button>
            </div>   
        </section>

        <section class="border-dark container">
            <nav class="navbar navbar-light bg-light">
              <form class="container-fluid">
                <div class="input-group">
                  <input type="text" class="form-control border-dark"
                    placeholder="Search for Polls and candidates"
                    aria-label="search" aria-describedby="basic-addon1" />
                  <button class="btn btn-black ml-2" type="button">Search</button>
                </div>
              </form>
            </nav>
          </section>

        <section class="justify-content-center container">
          <div class="navbar navbar-nav navbar-inverse">
            <ul class="d-flex list-inline">
              <Link class="list-inline-item px-5"><a to="#">ALL CATEGORIES</a></Link>
              <Link class="list-inline-item pr-5"><a to="polls.html">POLLS</a></Link>
              <Link class="list-inline-item pr-5"><a to="pagentry.html">PAGEANTRY</a></Link>
              <Link class="list-inline-item pr-5"><a to="politics.html">POLITICS</a></Link>
              <Link class="list-inline-item pr-5"><a to="gameshow.html">GAMESHOW</a></Link>
              <Link class="list-inline-item "><a to="music.html">MUSIC</a></Link>
            </ul>
          </div>

          <div class="row justify-content-center mb-5">
            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
              <div class="card text-white bg-white  shadow">
                <div class="zoom p-1">
                  <img class="img img-fluid card-img-top img-bordered"
                    src="assets/img/Quilox-exterior@2x.png" alt="" />
                </div>
                <div class="card-body" style={{fontSize: '10px'}}>
                  <div class="row text-dark">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                      <h6 class="h6" style={{fontSize: '10px'}}><b>Laff Matters 10.0</b> </h6>
                      <p class="small">location Porthacult</p>
                      <br />
                      <button class="btn btn-black small  btn-sm p-2 my-0 ">Vote now</button>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                    <button class="btn btn-outline-primary small btn-sm  my-0">Verified</button>
                    <p>February, 25, 2021</p>
                    <p class="small">From <br />
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
                    src="assets/img/images-11.png" alt="" />
                </div>
                <div class="card-body " style={{fontSize: '10px'}}>
                  <div class="row text-dark">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                      <h6 class="h6" style={{fontSize: '10px'}}><b>Laff Matters 10.0</b> </h6>
                      <p class="small">location Porthacult</p>
                      <br />
                      <button class="btn  btn-black small  btn-sm p-2 my-0">Vote now</button>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                    <button class="btn btn-outline-primary small btn-sm  my-0">Verified</button>
                    <p>February, 25, 2021</p>
                    <p class="small">From <br />
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
                    src="assets/img/images-4@2x.png" alt="" />
                </div>
                <div class="card-body" style={{fontSize: '10px'}}>
                  <div class="row text-dark">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                      <h6 class="h6" style={{fontSize: '10px'}}><b>Laff Matters 10.0</b> </h6>
                      <p class="small">location Porthacult</p>
                      <br />
                      <button class="btn  btn-black small  btn-sm p-2 my-0">Vote now</button>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                    <button class="btn btn-outline-primary small btn-sm  my-0">Verified</button>
                    <p>February, 25, 2021</p>
                    <p class="small">From <br />
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
                    src="assets/img/images-6@2x.png" alt="" />
                </div>
                <div class="card-body" style={{fontSize: '10px'}}>
                  <div class="row text-dark">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                      <h6 class="h6" style={{fontSize: '10px'}}><b>Laff Matters 10.0</b> </h6>
                      <p class="small">location Porthacult</p>
                      <br />
                      <button class="btn btn-black small  btn-sm p-2 my-0">Vote now</button>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                    <button class="btn btn-outline-primary small btn-sm  my-0">Verified</button>
                    <p>February, 25, 2021</p>
                    <p class="small">From <br />
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
                    src="assets/img/images-3@2x.png" alt="" />
                </div>
                <div class="card-body" style={{fontSize: '10px'}}>
                  <div class="row text-dark">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                      <h6 class="h6" style={{fontSize: '10px'}}><b>Laff Matters 10.0</b> </h6>
                      <p class="small">location Porthacult</p>
                      <br />
                      <button class="btn btn-black small  btn-sm p-2  my-0">Vote now</button>
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
                      <button class="btn btn-black small  btn-sm p-2 my-0">Vote now</button>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                    <button class="btn btn-outline-primary small btn-sm   my-0">Verified</button>
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
                      <button class="btn btn-black small  btn-sm p-2 my-0">Vote now</button>
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
                    src="assets/img/acceleratetv@2x.png" alt="" />
                </div>
                <div class="card-body" style={{fontSize: '10px'}}>
                  <div class="row text-dark">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                      <h6 class="h6" style={{fontSize: '10px'}}><b><b>Laff Matters 10.0</b> </b></h6>
                      <p class="small">location Porthacult</p>
                      <br/>
                      <button class="btn btn-black small  btn-sm p-2 my-0">Vote now</button>
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
</div>
  );
}
export default Voting;
