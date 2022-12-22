import '../Navbar/TopContent.css'

const HomeTop = () => {
  return (
    <>
      <div className="full_page container-fluid">
        <section className="border-dark container p-5 mx-auto">
          <nav className="navbar-nav navbar-white bg-white">
            <form className="">
              <div className="row">
                <div className="input-group">
                  <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                    <input
                      type="text"
                      className="form-control-lg border-dark d-block w-100 my-2"
                      placeholder="Search for Polls and candidates"
                      aria-label="search"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                    <button
                      className="btn btn-black  btn-lg my-2 d-block w-100"
                      type="button"
                    >
                      Search
                    </button>
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
                  <img
                    className="card-img-top img img-fluid"
                    src="assets/img/pexels-lukas-rodriguez-3618162@2x.png"
                    alt=""
                  />
                </div>
                <div className="card-body m-0 p-0">
                  <p className="card-title text-dark text-center lead p-2">
                    Create Polls
                  </p>
                  <button
                    type="button"
                    className="btn btn-black w-100 m-0 p-3 btn-lg"
                  >
                    Get started
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 colo-md-4 col-sm-4 col-12 my-4">
              <div className="card text-white bg-transparent">
                <div className="zoom zoom-bordered p-1">
                  <img
                    className="card-img-top img img-fluid"
                    src="assets/img/pexels-sora-shimazaki-5926280@2x.png"
                    alt=""
                  />
                </div>
                <div className="card-body m-0 p-0">
                  <p className="card-title text-dark text-center lead p-2">
                    Votes
                  </p>
                  <button
                    type="button"
                    className="btn btn-black w-100 m-0 p-3 btn-lg"
                  >
                    Get started
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 colo-md-4 col-sm-4 col-12 my-4">
              <div className="card text-white bg-transparent">
                <div className="zoom zoom-bordered p-1">
                  <img
                    className="card-img-top img img-fluid"
                    src="assets/img/pexels-cottonbro-5801657@2x.png"
                    alt=""
                  />
                </div>
                <div className="card-body m-0 p-0">
                  <p className="card-title text-dark text-center lead p-2">
                    Get Forms/Tickets
                  </p>
                  <button
                    type="button"
                    className="btn btn-black w-100 m-0 p-3 btn-lg"
                  >
                    Get started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeTop;
