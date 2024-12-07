// step2.js

//import Profile2nd from './profile2nd'
import { useState,useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { updateSchedule ,updateServiceProvider} from '../../features/booking/bookingSlice.js';

const ScheduleAndProvider = ({ onNext }) => {
  const [date, setDate] = useState(' ');
  const [shift, setShift] = useState('');
  const [providerName ,setproviderName] = useState(); // assuming service provider is fixed in this step
  //const [providerid ,setproviderid] = useState();
   const {  loading, error } = useSelector((state) => state.booking);
  const [services, setServices] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const storedData = localStorage.getItem("myData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setServices(parsedData.data);
    }
  }, []);
    if (loading) return <p>Loading providers...</p>;
  
    // all redux work 
   
    const handleContinue = () => {

      const selectedData = {
        shift,
        date,
      };
      const provider = {
        providerName,
        //providerid,
      };
    
      dispatch(updateSchedule(selectedData));
      dispatch(updateServiceProvider(provider));
      onNext();
    };
    




  return (
    <div className="container mx-auto  ">
      <form onSubmit={(e) => { 
   e.preventDefault(); 
   handleContinue(); 
}}>
      <div className="flex justify-end mb-4">
        <div>
          <label className="font-semibold mr-2">Sorted by:</label>
          <select className="border border-gray-300 rounded p-2">
            <option>Recommended</option>
            <option>Price (low to high)</option>
            <option>Price (high to low)</option>
            <option>Experienced</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary mx-2 text-center">
        Continue
      </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
  {/* Date & Shift Options */}
  <div className="bg-white p-4 border-2 rounded shadow-md lg:h-[400px] flex-shrink-0">
    <div className="flex flex-wrap gap-2 mb-4">
      <label htmlFor="date" className="form-label font-bold">Select the date</label>
      <input
        type="date"
        id="date"
        className="form-control w-100"
        required
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
    </div>

    <h3 className="font-bold mb-4">Time of Day</h3>
    <div className="mb-4">
      <div>
        <input type="radio" id="morning" name="shift" onChange={() => setShift("Morning")} />
        <label htmlFor="morning">Morning (8am - 12pm)</label>
      </div>
      <div>
        <input type="radio" id="afternoon" name="shift" onChange={() => setShift("Afternoon")} />
        <label htmlFor="afternoon">Afternoon (12pm - 4pm)</label>
      </div>
      <div>
        <input type="radio" id="evening" name="shift" onChange={() => setShift("Evening")} />
        <label htmlFor="evening">Evening (4pm - 8pm)</label>
      </div>
    </div>

    <h3 className="font-bold mb-4">Price</h3>
    <div className="flex items-center gap-2 mb-2">
      <input type="range" className="w-full" min="10" max="150" />
    </div>
    <p className="text-gray-500 text-sm">The average hourly rate is <span className="font-bold">$56.78/hr</span></p>
  </div>

  {/* Profile Section */}
  <div className="w-full ">
  {services.length > 0 ? (
                <ul>
                    {services.map((service, index) => (
                        <li key={index}>
                            <div className="bg-white border-2 p-4 mb-4 rounded shadow-md w-full">
          <div className="flex gap-4">
            <img src="https://via.placeholder.com/80" alt="Profile" className="w-20 h-20 rounded-full" />
            <div className="flex flex-col">
              <h3 className="font-bold text-xl" >{service.provider[0].FullName}</h3>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">GREAT VALUE</span>
              <p className="text-sm text-gray-500">0.0 (0 reviews) | 0 {service.category} tasks</p>
              <p className="text-sm text-gray-500">Vehicle: Car</p>
              <p className="text-sm text-gray-500">{service.description}</p>
            </div>
            <div className="ml-auto text-lg font-semibold">{service.price}</div>
          </div>

          <div className="my-4">
           <button className="btn btn-success w-full">Select & Continue</button>
 <p className="text-center text-gray-500 text-sm mt-2">
              You can chat with your Tasker, adjust task details, or change task time after booking.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h4 className="font-bold">How I can help:</h4>
            <p className="text-sm text-gray-600">
              I have 2 years experience in {service.description} and I want to done many works you can check my profile 
              <span className="font-semibold text-green-600">Read More</span>
            </p>
          </div>

              {/* Review Section */}
          <div>
            {/* here we add the map function to show all the reviews  */}
            <p className="font-semibold">Monica P. on Sat, Nov 2</p>
            <p className="text-gray-600 text-sm">Laveda did a great and efficient job </p>
          </div>
        </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No services available.</p>
            )}
    
    
  </div>
</div>

 
      <button type="submit" onClick={handleContinue}   className="btn btn-primary my-2 text-center">
        Continue
      </button>
      </form>
    </div>
  );
};

export default ScheduleAndProvider;