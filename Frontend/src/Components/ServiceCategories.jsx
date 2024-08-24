//import React from "react";
//import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
import ServiceCard from "./Services/serviceCard";

const ServiceCategories = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">OUR SERVICES</h2>
      <div className="row">
        <ServiceCard/>
       
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-primary">VIEW MORE</button>
      </div>
    </div>
  );
};

export default ServiceCategories;
