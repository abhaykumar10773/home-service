import React from "react";
import { TextField, MenuItem, Button } from "@mui/material"; // Material UI components
import professional from "../assets/images/professional.png"
import { Link } from "react-router-dom";


// Define the available options for area and category
const areas = ["Albany", "New York", "Los Angeles"];
const categories = ["Help Moving", "Furniture Assembly", "Home Cleaning"];
const hourlyrate = [ 100,200,300,400];

const Sprovider = () => {
  const [selectedArea, setSelectedArea] = React.useState("Albany");
  const [selectedCategory, setSelectedCategory] = React.useState("Help Moving");
  const [selectedHourlyrate, setselectedHourlyrate] = React.useState(100);
  return (
    <div className="container-fluid d-flex justify-content-evenly align-items-center mt-3">
    
      <div className="col-md-6 justify-center  hidden md:block ">
        <img
          src={professional} 
          alt="Worker"
          className="img-fluid rounded"
        />
      </div>

      <div className="col-md-5 p-5 bg-white rounded shadow " >
        <h2 className="font-bold text-2xl text-gray-900 mb-4">Earn money your way</h2>
        <p className="text-gray-700 mb-3">See how much you can make tasking on TaskRabbit</p>
        <form>
        <TextField
          select
          label="Select your area"
          value={selectedArea}
          onChange={(e) => setSelectedArea(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        >
          {areas.map((area) => (
            <MenuItem key={area} value={area}>
              {area}
            </MenuItem>
          ))}
        </TextField>

        {/* Choose a category */}
        <TextField
          select
          label="Choose a Category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </TextField>

        {/* Hourly Rate */}
        <TextField
          select
          label="Select your hourly rate"
          value={selectedHourlyrate}
          onChange={(e) => setselectedHourlyrate(e.target.value)}
          fullWidth
          margin="normal"
          variant="outlined"
        >
         {hourlyrate.map((hourlyrate) => (
            <MenuItem key={hourlyrate} value={hourlyrate}>
              {hourlyrate}
            </MenuItem>
          ))}
        </TextField>

        {/* Get Started Button */}
        <Button
          variant="contained"
          color="success"
          fullWidth
          size="large"
          className="mt-4"
        >
          Get Started
        </Button>
        </form>
        {/* Sign In link */}
        <div className="mt-3 text-center">
          <p className="text-gray-600">
            Already have an account? <Link to="/Login" className="text-green-600">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sprovider;
