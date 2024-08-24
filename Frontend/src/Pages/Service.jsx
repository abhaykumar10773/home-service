import React, { useState } from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';

const service = [
  {
    title: 'Plumbing',
    description: 'Our expert plumbers provide top-notch services for all your plumbing needs.',
    icon: '🚰',
  },
  {
    title: 'Electrical',
    description: 'Certified electricians ready to handle all your electrical issues.',
    icon: '💡',
  },
  {
    title: 'Maintenance',
    description: 'Professional maintenance services to keep your home in top shape.',
    icon: '🔧',
  },
];

const ServiceCard = ({ title, description, icon, onClick }) => {
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
      onClick={onClick}
    >
      <div className="card h-100 shadow-sm text-center">
        <div className="card-body">
          <div className="mb-3">
            <span className="display-4">{icon}</span>
          </div>
          <h5 className="card-title fw-bold fs-4 ">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="#book-service" className="btn fw-bold btn-primary mt-3">
            Book Now
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1);
  const [showRain, setShowRain] = useState(true);

  const handleCardClick = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setPage(1);
    setShowRain(false);
  };

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrev = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleConfirm = () => {
    setShowRain(true);
    setTimeout(handleClose, 1000); // Close modal after rain animation
  };

  return (
    <div className="container my-5">
      <h2 className="text-center fs-1 fw-bold text-primary mb-4">Our Services</h2>
      <div className="row">
        {service.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            onClick={() => handleCardClick(service)}
          />
        ))}
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>How It Works</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Steps */}
          <div className="d-flex justify-content-between text-center mb-4">
            <motion.div whileHover={{ scale: 1.1 }}>
              <span className="display-4">🛠️</span>
              <h5>Step 1</h5>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <span className="display-4">📅</span>
              <h5>Step 2</h5>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <span className="display-4">✅</span>
              <h5>Step 3</h5>
            </motion.div>
          </div>

          {/* Step Pages */}
          {page === 1 && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h4>Service: {selectedService?.title}</h4>
              <p>{selectedService?.description}</p>
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="form-group">
                <label>Contact Number</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="form-group">
                <label>Area</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="form-group">
                <label>Near Landmark</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="text-right">
                <button className="btn btn-primary" onClick={handleNext}>
                  Next
                </button>
              </div>
            </motion.div>
          )}

          {page === 2 && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h4>Select Date & Time</h4>
              <div className="form-group">
                <label>Select Date</label>
                <input type="date" className="form-control" required />
              </div>
              <div className="form-group">
                <label>Select Shift</label>
                <select className="form-control" required>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </select>
              </div>
              <div className="d-flex justify-content-between">
                <button className="btn btn-secondary" onClick={handlePrev}>
                  Back
                </button>
                <button className="btn btn-primary" onClick={handleNext}>
                  Next
                </button>
              </div>
            </motion.div>
          )}

          {page === 3 && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h4>Confirmation</h4>
              <p>Your booking is almost complete! Review your details and confirm the booking.</p>
              <div className="text-center">
                <button className="btn btn-success" onClick={handleConfirm}>
                  Confirm & Finish
                </button>
              </div>
            </motion.div>
          )}
        </Modal.Body>
      </Modal>

      {/* Rain Animation */}
      {showRain && (
        <div className="rain-container">
          {[...Array(50)].map((_, index) => (
            <div key={index} className="raindrop"></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServicesPage;
