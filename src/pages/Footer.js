import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div>
    <div className="desktop-footer">
    
    </div>
    
     <footer className="btn-black text-white  container-fluid mobile-footer">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12"><h1 className="display-4 footer-heading font-weight-bolder mt-2">DeeBoo!</h1></div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12"></div>
        </div>
        <br />
        <br />
        <br />
        <div className="row">
        <div className="col-sm-12 col-12">
            <p className="lead font-weight-bold">Stay informed about everything new?</p>
            <input type="text" placeholder="Enter your text here" className="form-control my-3 bg-dark border-bottom-white font-weight-bolder w-50 form-control-lg" />
            <p className="small text-white">We don't like spam either, read our <a href="#" className="text-white">privacy policy</a> if you are not convinced</p>
        </div>
        </div>
        <div className="jumbotron bg-white d-lg-none d-md-none">
            <h4 className="text-dark text-center">Create A Poll</h4>
        </div>
        <div className="container">
            <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12"></div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="d-none d-sm-block d-xs-block">
            <h3 className="lead">SOCIALS</h3>
            <ul className="p-0 m-0 navbar-nav" >
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Linkedin</li>
                <li>Snapchat</li>
            </ul>
            </div>
            <div className="container">
            <h3 className="text-center d-lg-none d-md-none font-weight-bold">SOCIALS</h3>
            <div className="row  px-4 d-xl-none d-lg-none d-md-none">
            <div className="col-6 col-xs-6 ">
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Twitter</p>
            </div>
            <div className="col-6 col-xs-6">
                <p>Linkedin</p>
                <p>Snapchat</p>
            </div>     
        </div>
        </div>
        </div>
        </div>
        </div>
        <div className="row container text-center"> 
        <div className="col-sm-6 col-6">
        <h5 className="text-white">Contact Us</h5> 
        </div>
        <div className="col-sm-6 col-6">
        <h5 className="text-white ">FQS's</h5>
        </div>
        </div>
            <ul className="list-group small " style={{listStyle:'none', fontSize:12}}>
            <div className="row p-5">
                <div className="col-sm-4 col-4">
                <li className="navbar-item">Contact</li>
                </div>
                <div className="col-sm-4 col-4">
                <li className="navbar-item">Privacy</li>
                </div>
                <div className="col-sm-4 col-4">
                <li className="navbar-item">Terms</li>
                </div>
            </div>
            </ul>
            <div className="row container text-center">
            <div className="col-sm-12 col-12 ">
                <p className="small">&copy; 2021 DeeBoo! | Site Built by Adubi Timmy |</p>
            </div>
            </div>
</footer>
    </div>
  );
}

export default Footer;
