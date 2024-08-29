// src/components/Header.js
//import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import log from '../assets/logo/log.png';
import { Dropdown } from 'react-bootstrap';

import { Link } from "react-router-dom";

function Header() {
  const { user ,loginWithRedirect,isAuthenticated,logout } = useAuth0();
    



  return (
   <div className=  "justify-content: center" style={{backgroundColor:"#7FA1C3"}} >
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar  expand="lg">
        <Container className="justify-content: space-around;">
          <Navbar.Brand to="/home">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={log}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </motion.div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto fs-6 fw-bold " style={{textAlign:"center",float:"left" }}>
              
               <Nav.Link><Link to="/home">Home</Link></Nav.Link>
               <Nav.Link><Link to="/service">Service</Link></Nav.Link>
               <Nav.Link> <Link to="/About">About</Link></Nav.Link>
               <Nav.Link><Link to="/Contact">Contact</Link></Nav.Link>
  
            </Nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="d-flex "
            >
              <div className="navbar-nav">
                 
                 { isAuthenticated ? ( 
                  <Dropdown className="nav-item ">
                  <Dropdown.Toggle
                    variant="link"
                    id="profileDropdown"
                    className="nav-link dropdown-header p-0"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img src={user.picture} alt="Profile Icon" className="rounded-circle" width="30" />
                  </Dropdown.Toggle>
            
                  <Dropdown.Menu aria-labelledby="profileDropdown">
                    <Dropdown.Item >{user.name}</Dropdown.Item>
                    <Dropdown.Item to="#">Bookings</Dropdown.Item>
                    <Dropdown.Item>
                      <button 
                        onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                        className="btn btn-link p-0 "
                        style={{ color: 'inherit', textDecoration: 'none' }}
                      >
                        Logout
                      </button>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
   ):
                   (   <button type="button" className=" btn  btn-primary" onClick={() => loginWithRedirect()}>Log In</button>)
                
                  }
                   
               </div>
            </motion.div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
    </div>
  );
}

export default Header;
