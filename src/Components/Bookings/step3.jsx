import React from "react";
import { useSelector } from "react-redux";
//import {selectedService,serviceLocation,schedule, } from "../../features/booking/bookingSlice.js"


const ReviewBooking = ({
  onBack,
  onConfirm,
}) => {

  const {
    selectedService,
    //selectedSubcategory,
    serviceLocation,
    schedule,
  //  serviceProviders,
  } = useSelector((state) => state.booking);
  return (
    <div className="container mx-auto py-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 border">
        {/* Header */}
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">
          Review Your Booking
        </h2>

        {/* Service Location Section */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            Service Location:
          </h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              <strong>Category:</strong> {selectedService?.name || "Not selected"}
            </li>
            <li>
              <strong>House No:</strong> {serviceLocation?.houseNo}
            </li>
            <li>
              <strong>Area:</strong> {serviceLocation.area}, {serviceLocation.city}
            </li>
            <li>
              <strong>Description:</strong> {serviceLocation.description}
            </li>
          </ul>
        </div>

        {/* Schedule Section */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-800 mb-2">Schedule:</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              <strong>Date:</strong> {schedule.date}
            </li>
            <li>
              <strong>Shift:</strong> {schedule.shift}
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center gap-4">
          <button
            className="w-full md:w-auto px-6 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition duration-150"
            onClick={onBack}
          >
            Back
          </button>
          <button
            className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-150"
            onClick={onConfirm}
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewBooking;
