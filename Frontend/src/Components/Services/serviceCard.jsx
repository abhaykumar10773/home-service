//import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <motion.div
      className="col-md-4 p-3"
      whileHover={{
        rotateY: 10,
        rotateX: 10,
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
      style={{ perspective: '1000px' }}
    >
      <div className="card h-100 shadow-sm text-center">
        <div className="card-body">
          <div className="mb-3">
            <span className="display-4">{icon}</span>
          </div>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <Link to="/service" className="btn btn-primary mt-3">
            Book Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const ServiceList = () => {
  const services = [
    {
      title: 'Plumbing',
      description: 'Our expert plumbers provide top-notch services for all your plumbing needs.',
      icon: '🚰', // Replace with an actual icon
    },
    {
      title: 'Electrical',
      description: 'Certified electricians ready to handle all your electrical issues.',
      icon: '💡', // Replace with an actual icon
    },
    {
      title: 'Maintenance',
      description: 'Professional maintenance services to keep your home in top shape.',
      icon: '🔧', // Replace with an actual icon
    },
    // Add more services as needed
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <div className="row">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
