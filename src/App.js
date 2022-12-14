import React from 'react';
import './App.css';
import Nav from './Nav';
import Voting from './container/voting/voting';
import CreatePolls from './container/Polls/createPolls';
import Pricing from './container/Pricing/pricing';
import Forms from './container/forms/forms';
import GetStarted from './getStarted';
import Login from './container/Login/login';
import { Link } from 'react-router-dom';
import Footer from './pages/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Swiper} from 'swiper/react/swiper';
import SwiperCore from 'swiper'
import 'swiper/swiper-bundle.css'
import './styles.css';

// import Swiper styles
import 'swiper/react/swiper';


function App() {

  // const slides = [];

  // for (let i=0; i< 5; i+=1){
  //   slides.push(
  //     <SwiperSlide key={`slide-$${i}`}>
  //       <img src={`assets/img/https://picsum.photos/id/{$i+1}/500/300`} alt={`i`}></img>
  //     </SwiperSlide>
  //   )
  // }

  return (
    
    <Router>
    <div>
        <Nav /> 
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/voting" exact component={Voting} />
            <Route path="/createPolls" exact component={CreatePolls} />
            <Route path="/pricing" exact component={Pricing} />
            <Route path="/forms" exact component={Forms} />
            <Route path="/getStarted" exact component={GetStarted} />
            <Route path="/login" exact component={Login} />
          </Switch>
        <Footer /> 
    </div>
    </Router> 
  );
}

const Home = () =>{
  const styleSpec = {
    fontSize: 10 + 'px',
  }
  return(
  <div>
    <div className="full_page container-fluid">
      <section className="border-dark container">
        <nav className="navbar-nav navbar-light bg-light">
          <form className="">
          <div className="row">
            <div className="input-group">
                <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                  <input type="text" className="form-control-lg border-dark d-block w-100 my-2"
                  placeholder="Search for Polls and candidates"
                  aria-label="search" aria-describedby="basic-addon1" />
                </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                <button className="btn btn-black  btn-lg my-2 d-block w-100" type="button">Search</button>
              </div>
              </div>
            </div>
          </form>
        </nav>
      </section>

      <section className="container-fluid">
        <p className="lead text-center pt-3">Pick your goal for today.</p>
        <div className="row justify-content-center">
          <div className="col-lg-4 colo-md-4 col-sm-4 col-12 my-4">
            <div className="card text-white bg-transparent shadow">
              <div className="zoom zoom-bordered p-1">
                <img className="card-img-top img img-fluid"src="assets/img/pexels-lukas-rodriguez-3618162@2x.png"
                  alt="" />
              </div>
              <div className="card-body m-0 p-0">
                <p className="card-title text-dark text-center lead p-2">Create
                  Polls</p>
                <button type="button" className="btn btn-black w-100 m-0 p-3 btn-lg">Get
                  started</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 colo-md-4 col-sm-4 col-12 my-4">
            <div className="card text-white bg-transparent">
              <div className="zoom zoom-bordered p-1">
                <img className="card-img-top img img-fluid"src="assets/img/pexels-sora-shimazaki-5926280@2x.png"
                  alt="" />
              </div>
              <div className="card-body m-0 p-0">
                <p className="card-title text-dark text-center lead p-2">Votes</p>
                <button type="button" className="btn btn-black w-100 m-0 p-3 btn-lg">Get
                  started</button>
              </div>
            </div>
          </div>
          <div className="col-lg-4 colo-md-4 col-sm-4 col-12 my-4">
            <div className="card text-white bg-transparent">
              <div className="zoom zoom-bordered p-1">
                <img className="card-img-top img img-fluid"src="assets/img/pexels-cottonbro-5801657@2x.png"
                  alt="" />
              </div>
              <div className="card-body m-0 p-0">
                <p className="card-title text-dark text-center lead p-2">Get
                  Forms/Tickets</p>
                <button type="button" className="btn btn-black w-100 m-0 p-3 btn-lg">Get
                  started</button>
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>
    <section className="bg-img full_page container-fluid">
      <h1 className="display-4 text-white text-center p-3">BROWSE</h1>
      <p className="text-center lead text-white"><b>Explore the vast range of events
          & competitions happening right now</b></p>
      <div className="container ">
        {/* <Swiper  
          spaceBetween={50}
          slidesPerView={4}
          onSlideChange={()=> console.log('slide change')}
          onSwiper={(swiper)=> console.log(swiper)}
                  >
          <SwiperSlide>
            <img src="assets/img/Mask Group 1@2x.png" className='img img-fluid d-block w-25' alt="Image 1"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/img/model1.jpg" className='img img-fluid d-block w-25' alt="Image 2"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/img/model2.jpg" className='img img-fluid d-block w-25' alt="Image 3"/>
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/img/model3.jpg" className='img img-fluid d-block w-25' alt="Image 4"/>
          </SwiperSlide>
        </Swiper>
         */}
      </div>
        
    </section>

    <section className="bg-fixed justify-content-center container-fluid">
      <h3 className="h3 text-center p-5"><b>Explore More</b></h3>
      <div className="navbar navbar-nav navbar-inverse p-3">
        <ul className="d-flex list-inline">
          <li className="list-inline-item"><Link to="/pages/home_sub/events">EVENTS</Link></li>
          <li className="list-inline-item px-5"><Link to="/pages/home_sub/contests">CONTESTS</Link></li>
          <li className="list-inline-item"><Link to="/pages/home_sub/forms">FORMS</Link></li>
        </ul>
      </div>

      <div className="row justify-content-center mb-5">
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="card text-white bg-white  shadow">
            <div className="zoom p-1">
              <img className="img img-fluid card-img-top img-bordered"
                src="assets/img/Quilox-exterior@2x.png" alt="" />
            </div>
            <div className="card-body" style={styleSpec}>
              <div className="row text-dark">
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <h6 className="h6" style={styleSpec}><b>Laff Matters 10.0</b> </h6>
                  <p className="small">location Porthacult</p>
                  <br />
                  <button className="btn btn-outline-black small  btn-sm p-2 my-0">Get Ticket</button>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <button className="btn btn-outline-primary small btn-sm  my-0">Verified</button>
                <p>February, 25, 2021</p>
                <p className="small">From <br />
                <span className="lead text-primary" style={styleSpec}>N5,000.00</span> 
                </p>
                
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12 ">
          <div className="card text-white bg-white shadow">
            <div className="zoom p-1">
              <img className="img img-fluid card-img-top img-bordered"
                src="assets/img/images-11.png" alt="" />
            </div>
            <div className="card-body " style={styleSpec}>
              <div className="row text-dark">
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <h6 className="h6" style={styleSpec}><b>Laff Matters 10.0</b> </h6>
                  <p className="small">location Porthacult</p>
                  <br />
                  <button className="btn btn-outline-black small  btn-sm my-0">Get Ticket</button>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <button className="btn btn-outline-primary small btn-sm  my-0">Verified</button>
                <p>February, 25, 2021</p>
                <p className="small">From <br />
                <span className="lead text-primary" style={styleSpec}>N5,000.00</span> 
                </p>
                
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12 ">
          <div className="card text-white bg-white shadow">
            <div className="zoom p-1">
              <img className="img img-fluid card-img-top img-bordered"
                src="assets/img/images-4@2x.png" alt="" />
            </div>
            <div className="card-body" style={styleSpec}>
              <div className="row text-dark">
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <h6 className="h6" style={styleSpec}><b>Laff Matters 10.0</b> </h6>
                  <p className="small">location Porthacult</p>
                  <br />
                  <button className="btn btn-outline-black small  btn-sm my-0">Get Ticket</button>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <button className="btn btn-outline-primary small btn-sm  my-0">Verified</button>
                <p>February, 25, 2021</p>
                <p className="small">From <br />
                <span className="lead text-primary" style={styleSpec}>N5,000.00</span> 
                </p>
                
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12 ">
          <div className="card text-white bg-white shadow">
            <div className="zoom p-1">
              <img className="img img-fluid card-img-top img-bordered"
                src="assets/img/images-6@2x.png" alt="" />
            </div>
            <div className="card-body" style={styleSpec}>
              <div className="row text-dark">
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <h6 className="h6" style={styleSpec}><b>Laff Matters 10.0</b> </h6>
                  <p className="small">location Porthacult</p>
                  <br />
                  <button className="btn btn-outline-black small  btn-sm my-0">Get Ticket</button>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <button className="btn btn-outline-primary small btn-sm  my-0">Verified</button>
                <p>February, 25, 2021</p>
                <p className="small">From <br />
                <span className="lead text-primary" style={styleSpec}>N5,000.00</span> 
                </p>
                
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-3 col-md-6 col-sm-6 col-12 ">
          <div className="card text-white bg-white shadow">
            <div className="zoom p-1">
              <img className="img img-fluid card-img-top img-bordered"
                src="assets/img/images-3@2x.png" alt="" />
            </div>
            <div className="card-body" style={styleSpec}>
              <div className="row text-dark">
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <h6 className="h6" style={styleSpec}><b>Laff Matters 10.0</b> </h6>
                  <p className="small">location Porthacult</p>
                  <br />
                  <button className="btn btn-outline-black small  btn-sm  my-0">Get Ticket</button>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <button className="btn btn-outline-primary small btn-sm  my-0">Verified</button>
                <p>February, 25, 2021</p>
                <p className="small">From <br />
                <span className="lead text-primary" style={styleSpec}>N5,000.00</span> 
                </p>
                
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12 ">
          <div className="card text-white bg-white shadow">
            <div className="zoom p-1">
              <img className="img img-fluid card-img-top img-bordered"
                src="assets/img/images-8@2x.png" alt="" />
            </div>
            <div className="card-body" style={styleSpec}>
              <div className="row text-dark">
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <h6 className="h6" style={styleSpec}><b>Laff Matters 10.0</b> </h6>
                  <p className="small">location Porthacult</p>
                  <br />
                  <button className="btn btn-outline-black small  btn-sm my-0">Get Ticket</button>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <button className="btn btn-outline-primary small btn-sm  my-0">Verified</button>
                <p>February, 25, 2021</p>
                <p className="small">From <br />
                <span className="lead text-primary" style={styleSpec}>N5,000.00</span> 
                </p>
                
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12 ">
          <div className="card text-white bg-white shadow">
            <div className="zoom p-1">
              <img className="img img-fluid card-img-top img-bordered"
                src="assets/img/images-5@2x.png" alt="" />
            </div>
            <div className="card-body" style={styleSpec}>
              <div className="row text-dark">
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <h6 className="h6" style={styleSpec}><b>Laff Matters 10.0</b> </h6>
                  <p className="small">location Porthacult</p>
                  <br />
                  <button className="btn btn-outline-black small  btn-sm my-0">Get Ticket</button>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <button className="btn btn-outline-primary small btn-sm  my-0">Verified</button>
                <p>February, 25, 2021</p>
                <p className="small">From <br />
                <span className="lead text-primary" style={styleSpec}>N5,000.00</span> 
                </p>
                
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12 ">
          <div className="card text-white bg-white shadow">
            <div className="zoom p-1">
              <img className="img img-fluid card-img-top img-bordered"
                src="assets/img/acceleratetv@2x.png" alt="" />
            </div>
            <div className="card-body h3" style={styleSpec}>
              <div className="row text-dark">
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                  <h6 className="h6" style={styleSpec}><b><b>Laff Matters 10.0</b> </b></h6>
                  <p className="small">location Porthacult</p>
                  <br />
                  <button className="btn btn-outline-black small  btn-sm my-0">Get Ticket</button>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                <button className="btn btn-outline-primary small btn-sm  my-0">Verified</button>
                <p>February, 25, 2021</p>
                <p className="small">From <br />
                <span className="lead text-primary" style={styleSpec}>N5,000.00</span> 
                </p>
                
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  </div>
  )
};

export default App;

