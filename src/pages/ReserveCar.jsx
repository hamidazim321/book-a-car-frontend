import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getUser } from '../helpers/storage';
import getFormData from '../helpers/getFormData';
import { createReservation } from '../redux/reservations/reservationsThunk';
import { fetchCars } from '../redux/car/carThunk';
import { majorCities } from '../helpers/staticSharedVariables';

const ReserveCar = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cars } = useSelector((state) => state.car);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = getFormData(e.target);
    dispatch(createReservation(formData))
      .then(() => {
        e.target.reset();
        navigate('/my-reservations');
      });
  };

  const [cityInput, setCityInput] = useState(false);
  const handleCityChange = (e) => {
    if (e.target.value === 'not-listed') {
      setCityInput(true);
    } else {
      setCityInput(false);
    }
  };

  return (
    <div className="relative h-screen flex flex-col justify-center md:p-0 bg-opacity-85 bg-lime-custom px-2 reserve-main">
      <div className="background-image absolute -ml-2 md:ml-0 w-full h-full -z-1" />
      <div className="relative mb-3">
        <h1 className="text-center text-white font-mono mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900">BOOK A CAR TEST RIDE</h1>
        <p className="text-center text-white md:w-3/4 lg:w-1/2 mx-auto">
          There are X different models of cars available for test rides.
          We have showrooms across the globe. Please fill in the form below to book a test ride.
          We will get back to you with the details.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        method="post"
        className="relative flex flex-col md:items-center w-full gap-3 md:flex-row md:w-3/4 lg:w-1/2 mx-auto"
      >
        <div>
          <input type="hidden" value={getUser().id} name="user_id" />
        </div>
        {id && (<input type="hidden" value={id} name="car_id" />)}
        {!id && cars.length === 0 && (
          <div>
            <input type="text" placeholder="Car ID" className="block w-full md:w-20 p-2 text-gray-900 border border-gray-300 rounded-full bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" name="car_id" />
          </div>
        )}
        {!id && cars.length > 0 && (
          <div>
            <select name="car_id" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-full bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500">
              <option value="">Select a car</option>
              {cars.map((car) => (
                <option key={car.id} value={car.id}>{car.name}</option>
              ))}
            </select>
          </div>
        )}
        <div>
          <input type="date" placeholder="Date" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-full bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" name="date" />
        </div>
        <div>
          <select name="city" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-full bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" onChange={handleCityChange}>
            <option value="">Select a city</option>
            {majorCities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
            <option value="not-listed">Not listed?</option>
          </select>
          {cityInput && (
            <input type="text" placeholder="Enter your city" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-full bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 mt-2" name="city" />
          )}
        </div>
        <button type="submit" className="md:w-60 lg:w-52 text-lime-custom bg-white hover:bg-opacity-90 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-2 py-2 focus:outline-none">Book Now</button>
      </form>
    </div>
  );
};

export default ReserveCar;
