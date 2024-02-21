import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCar, fetchCars } from '../redux/car/carThunk';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorAlert from '../components/ErrorAlert';

export default function DeleteCar() {
  const { cars, error, loading } = useSelector((state) => state.car);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, []);
  return (
    <section className="p-4 mt-6">
      {
        error
        && (
          <ErrorAlert message={error.message === 'Rejected' ? 'You Are not Authorized For This Action' : error.message} />
        )
      }
      {
        loading
        && (
          <div className="absolute top-1/2 left-1/2">
            <LoadingSpinner />
          </div>
        )
      }
      <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        {
          cars
          && cars.map((car) => (
            <li className="pb-3 sm:pb-4" key={car.id}>
              <div>
                <p className="font-semibold text-xl">
                  {car.name}
                </p>
              </div>
              <div>
                <button
                  type="button"
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
                  onClick={() => { dispatch(deleteCar(car.id)); }}
                >
                  Delete Car
                </button>
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  );
}
