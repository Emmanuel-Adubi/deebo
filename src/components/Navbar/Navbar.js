import React from 'react';
import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';


const Navbar = ()=> {
  const navStyle = {
    color:'black'
  }

 


  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-white ml-3 mr-3">
      <Link className="navbar-brand display-1" to="/" style={{fontWeight: 800}}>DeeBo!</Link>
      <Button variant='primary' className="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </Button>

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
          <Typography variant='body2' className="nav-item">
            <Link className="nav-link" to="/forms" style={navStyle}>Forms</Link>
          </Typography>
        </ul>
        <div className="my-5 my-lg-0" >
          <Button variant='outlined' theme = {"theme"} color='default' className='p-2'  type="submit"  style={navStyle}>
              <Link to="/login" className="nav-link text-dark" style={{navStyle}}>Login</Link></Button>
          <Button variant='contained' className='p-2' color='secondary' type="button">
            <Link to="/getStarted" className="nav-link text-white" style={{navStyle}}>Get
            started</Link>
            </Button>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
