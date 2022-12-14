import React from 'react';
// import '/App.css';
import { Link } from 'react-router-dom';

function Nav() {
  const navStyle = {
    color:'black'
  }
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light ml-3 mr-3">
      <Link className="navbar-brand display-1" to="/" style={{fontWeight: 800}}>DeeBo!</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto text-lg-right">
          <li className="nav-item active">
            <Link className="nav-link" to="/" style={navStyle}>Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/voting" style={navStyle}>Voting</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/createPolls" style={navStyle}>Create Polls</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/pricing" style={navStyle}>Pricing</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/forms" style={navStyle}>Forms</Link>
          </li>
        </ul>
        <div className="my-5 my-lg-0">
          <button className="btn  btn-outline-black text-black my-1 my-sm-0 p-2 mx-2
            border-dark" type="submit"  style={navStyle}>
              <Link to="/login" className="nav-link text-dark" style={{navStyle}}>Login</Link></button>
          <button className="btn btn-black my-2 my-sm-0 p-2 mx-2 btn-lg"type="button">
            <Link to="/getStarted" className="nav-link text-white" style={{navStyle}}>Get
            started</Link>
            </button>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Nav;
