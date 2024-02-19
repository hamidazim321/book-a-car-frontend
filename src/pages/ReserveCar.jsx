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
    dispatch(createReservation(formData));
    e.target.reset();
    // navigate('/reservations');
  };

  return (
    <div className="h-screen flex flex-col justify-center md:p-0">
      <div className="mb-3">
        <h1 className="text-center font-mono mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900">Reserve Car</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col w-full gap-3 md:w-1/2 mx-auto"
      >
        <div>
          <input type="hidden" value={getUser().id} name="user_id" />
        </div>
        {id && (<input type="hidden" value={id} name="car_id" />)}
        {!id && (
          <div>
            <input type="text" placeholder="Car ID" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" name="car_id" />
          </div>
        )}
        <div>
          <input type="date" placeholder="Date" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" name="date" />
        </div>
        <div>
          <input type="text" placeholder="City" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" name="city" />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">Reserve</button>
      </form>
    </div>
  );
};

export default ReserveCar;
