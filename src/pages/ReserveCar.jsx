import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { getUser } from '../helpers/storage';
import getFormData from '../helpers/getFormData';
import { createReservation } from '../redux/reservations/reservationsThunk';

const ReserveCar = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = getFormData(e.target);
    dispatch(createReservation(formData))
      .then(() => {
        e.target.reset();
        // window.location.reload();
        // navigate('/reservations');
      });
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
        {!id && (
          <div>
            <input type="text" placeholder="Car ID" className="block w-full md:w-20 p-2 text-gray-900 border border-gray-300 rounded-full bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" name="car_id" />
          </div>
        )}
        <div>
          <input type="date" placeholder="Date" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-full bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" name="date" />
        </div>
        <div>
          <input type="text" placeholder="City" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-full bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" name="city" />
        </div>
        <button type="submit" className="md:w-60 lg:w-52 text-lime-custom bg-white hover:bg-opacity-90 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-2 py-2 focus:outline-none">Book Now</button>
      </form>
    </div>
  );
};

export default ReserveCar;
