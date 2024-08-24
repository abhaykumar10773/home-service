//import React from 'react'
import HeroSection from "../Components/HeroSection"
import ServiceCategories from "../Components/ServiceCategories"
import FeaturedProviders from "../Components/FeaturedProviders"
import HowItWorks from "../Components/HowItWorks"
import Testimonials from "../Components/Testimonials"
//import Header from "../Components/Header"
//import Footers from "../Components/footers"
//import { useState } from "react"

export default function Home() {
//const[selectedTab,setselectedTab] = useState("Home");

  return (
    <>
        <HeroSection />
    <ServiceCategories />
    <FeaturedProviders />
    <HowItWorks />
    <Testimonials />
  
</>
  )
}
{/* <div className="navbar-nav">
                 
                 { isAuthenticated ? ( 
                  <Dropdown className="nav-item">
                  <Dropdown.Toggle
                    variant="link"
                    id="profileDropdown"
                    className="nav-link p-0"
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
                   (   <button type="button" className="btn  btn-primary" onClick={() => loginWithRedirect()}>Log In</button>)
                
                  }
                   
               </div> */}