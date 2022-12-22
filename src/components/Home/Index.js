import { Link } from "react-router-dom";
import HomeTop from "../Navbar/TopContent";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Tabs } from '@material-ui/core';
import SwiperCore, {  Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Home = () => {
  const styleSpec = {
    fontSize: 10 + "px",
  };

  return (
    <div>
      <HomeTop />

      <section className="bg-img full_page container-fluid">
        <h1 className="display-4 text-white text-center p-3">BROWSE</h1>
        <p className="text-center lead text-white">
          <b>
            Explore the vast range of events & competitions happening right now
          </b>
        </p>
        <div className="container p-5">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
            <img
                src="assets/img/model5.jpg"
                className="img img-fluid d-block w-100"
                alt="Image 5"
              />
            </SwiperSlide>
            <SwiperSlide>
            <img
                src="assets/img/model5.jpg"
                className="img img-fluid d-block w-100"
                alt="Image 6"
              />
            </SwiperSlide>
            <SwiperSlide>
            <img
                src="assets/img/model5.jpg"
                className="img img-fluid d-block w-100"
                alt="Image 3"
              />
            </SwiperSlide>
            <SwiperSlide>
            <img
                src="assets/img/model5.jpg"
                className="img img-fluid d-block w-100"
                alt="Image 4"
              />
            </SwiperSlide>
            
          </Swiper>
        </div>
      </section>

      <section className="bg-fixed justify-content-center container-fluid">
        <h3 className="h3 text-center p-5">
          <b>Explore More</b>
        </h3>
        <div className="navbar navbar-nav navbar-inverse p-3">
          <ul className="d-flex list-inline">
            <li className="list-inline-item">
              <Link to="/events">EVENTS</Link>
            </li>
            <li className="list-inline-item px-5">
              <Link to="/contests">CONTESTS</Link>
            </li>
            <li className="list-inline-item">
              <Link to="forms">FORMS</Link>
            </li>
          </ul>
        </div>

        <div className="row justify-content-center mb-5">
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card text-white bg-white  shadow">
              <div className="zoom p-1">
                <img
                  className="img img-fluid card-img-top img-bordered"
                  src="assets/img/Quilox-exterior@2x.png"
                  alt=""
                />
              </div>
              <div className="card-body" style={styleSpec}>
                <div className="row text-dark">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <h6 className="h6" style={styleSpec}>
                      <b>Laff Matters 10.0</b>{" "}
                    </h6>
                    <p className="small">location Porthacult</p>
                    <br />
                    <button className="btn btn-outline-black small  btn-sm p-2 my-0">
                      Get Ticket
                    </button>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <button className="btn btn-outline-primary small btn-sm  my-0">
                      Verified
                    </button>
                    <p>February, 25, 2021</p>
                    <p className="small">
                      From <br />
                      <span className="lead text-primary" style={styleSpec}>
                        N5,000.00
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 ">
            <div className="card text-white bg-white shadow">
              <div className="zoom p-1">
                <img
                  className="img img-fluid card-img-top img-bordered"
                  src="assets/img/images-11.png"
                  alt=""
                />
              </div>
              <div className="card-body " style={styleSpec}>
                <div className="row text-dark">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <h6 className="h6" style={styleSpec}>
                      <b>Laff Matters 10.0</b>{" "}
                    </h6>
                    <p className="small">location Porthacult</p>
                    <br />
                    <button className="btn btn-outline-black small  btn-sm my-0">
                      Get Ticket
                    </button>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <button className="btn btn-outline-primary small btn-sm  my-0">
                      Verified
                    </button>
                    <p>February, 25, 2021</p>
                    <p className="small">
                      From <br />
                      <span className="lead text-primary" style={styleSpec}>
                        N5,000.00
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 ">
            <div className="card text-white bg-white shadow">
              <div className="zoom p-1">
                <img
                  className="img img-fluid card-img-top img-bordered"
                  src="assets/img/images-4@2x.png"
                  alt=""
                />
              </div>
              <div className="card-body" style={styleSpec}>
                <div className="row text-dark">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <h6 className="h6" style={styleSpec}>
                      <b>Laff Matters 10.0</b>{" "}
                    </h6>
                    <p className="small">location Porthacult</p>
                    <br />
                    <button className="btn btn-outline-black small  btn-sm my-0">
                      Get Ticket
                    </button>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <button className="btn btn-outline-primary small btn-sm  my-0">
                      Verified
                    </button>
                    <p>February, 25, 2021</p>
                    <p className="small">
                      From <br />
                      <span className="lead text-primary" style={styleSpec}>
                        N5,000.00
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 ">
            <div className="card text-white bg-white shadow">
              <div className="zoom p-1">
                <img
                  className="img img-fluid card-img-top img-bordered"
                  src="assets/img/images-6@2x.png"
                  alt=""
                />
              </div>
              <div className="card-body" style={styleSpec}>
                <div className="row text-dark">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <h6 className="h6" style={styleSpec}>
                      <b>Laff Matters 10.0</b>{" "}
                    </h6>
                    <p className="small">location Porthacult</p>
                    <br />
                    <button className="btn btn-outline-black small  btn-sm my-0">
                      Get Ticket
                    </button>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <button className="btn btn-outline-primary small btn-sm  my-0">
                      Verified
                    </button>
                    <p>February, 25, 2021</p>
                    <p className="small">
                      From <br />
                      <span className="lead text-primary" style={styleSpec}>
                        N5,000.00
                      </span>
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
                <img
                  className="img img-fluid card-img-top img-bordered"
                  src="assets/img/images-3@2x.png"
                  alt=""
                />
              </div>
              <div className="card-body" style={styleSpec}>
                <div className="row text-dark">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <h6 className="h6" style={styleSpec}>
                      <b>Laff Matters 10.0</b>{" "}
                    </h6>
                    <p className="small">location Porthacult</p>
                    <br />
                    <button className="btn btn-outline-black small  btn-sm  my-0">
                      Get Ticket
                    </button>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <button className="btn btn-outline-primary small btn-sm  my-0">
                      Verified
                    </button>
                    <p>February, 25, 2021</p>
                    <p className="small">
                      From <br />
                      <span className="lead text-primary" style={styleSpec}>
                        N5,000.00
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 ">
            <div className="card text-white bg-white shadow">
              <div className="zoom p-1">
                <img
                  className="img img-fluid card-img-top img-bordered"
                  src="assets/img/images-8@2x.png"
                  alt=""
                />
              </div>
              <div className="card-body" style={styleSpec}>
                <div className="row text-dark">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <h6 className="h6" style={styleSpec}>
                      <b>Laff Matters 10.0</b>{" "}
                    </h6>
                    <p className="small">location Porthacult</p>
                    <br />
                    <button className="btn btn-outline-black small  btn-sm my-0">
                      Get Ticket
                    </button>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <button className="btn btn-outline-primary small btn-sm  my-0">
                      Verified
                    </button>
                    <p>February, 25, 2021</p>
                    <p className="small">
                      From <br />
                      <span className="lead text-primary" style={styleSpec}>
                        N5,000.00
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 ">
            <div className="card text-white bg-white shadow">
              <div className="zoom p-1">
                <img
                  className="img img-fluid card-img-top img-bordered"
                  src="assets/img/images-5@2x.png"
                  alt=""
                />
              </div>
              <div className="card-body" style={styleSpec}>
                <div className="row text-dark">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <h6 className="h6" style={styleSpec}>
                      <b>Laff Matters 10.0</b>{" "}
                    </h6>
                    <p className="small">location Porthacult</p>
                    <br />
                    <button className="btn btn-outline-black small  btn-sm my-0">
                      Get Ticket
                    </button>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <button className="btn btn-outline-primary small btn-sm  my-0">
                      Verified
                    </button>
                    <p>February, 25, 2021</p>
                    <p className="small">
                      From <br />
                      <span className="lead text-primary" style={styleSpec}>
                        N5,000.00
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12 ">
            <div className="card text-white bg-white shadow">
              <div className="zoom p-1">
                <img
                  className="img img-fluid card-img-top img-bordered"
                  src="assets/img/acceleratetv@2x.png"
                  alt=""
                />
              </div>
              <div className="card-body h3" style={styleSpec}>
                <div className="row text-dark">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <h6 className="h6" style={styleSpec}>
                      <b>
                        <b>Laff Matters 10.0</b>{" "}
                      </b>
                    </h6>
                    <p className="small">location Porthacult</p>
                    <br />
                    <button className="btn btn-outline-black small  btn-sm my-0">
                      Get Ticket
                    </button>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <button className="btn btn-outline-primary small btn-sm  my-0">
                      Verified
                    </button>
                    <p>February, 25, 2021</p>
                    <p className="small">
                      From <br />
                      <span className="lead text-primary" style={styleSpec}>
                        N5,000.00
                      </span>
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
};

export default Home;
