// src/components/HeroSection.js
//import React from "react";
import plumber from '../assets/images/plumber.png';
//import {motion} from 'framer-motion';
function HeroSection() {
  return (<>
   
    <div className="container-fluid bg-blue-100 d-flex flex-column flex-md-row align-items-center justify-content-space-around pt-5 mb-0">
    <div className=" text-md-left mb-4 mb-md-0 w-75 p-3 pl-8">
      <h1  className=" text-4xl font-bold text-blue-700">Repair and Maintenance Services</h1>
      <p className="lead text-gray-600 mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam animi mollitia nemo labore debitis dignissimos reprehenderit, suscipit illum vitae sequi officiis corporis, voluptates similique tempore. Sapiente commodi, qui impedit, perspiciatis deleniti expedita cumque magni ratione, provident officia doloremque eos eum?</p>
      <button className="btn mt-6 btn-primary text-white">Contact Us</button>
    </div>
    <div className="text-center">
      <img src={plumber} alt="Service Worker" className="img-fluid" />
    </div>
  </div>
  </>
  );
}

export default HeroSection;
