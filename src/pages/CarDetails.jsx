import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { getToken, removeLogin } from '../helpers/storage';

const CarDetailPage = () => {
  const BASE_URL = 'http://127.0.0.1:3001/api/v1';
  const CARS_PATH = '/cars';
  const headers = {
    authorization: getToken(),
  };

  const [car, setCar] = useState({});
  const { carId } = useParams();

  useEffect(() => {
    const getSingleCar = async (id) => {
      try {
        const res = await axios.get(`${BASE_URL}${CARS_PATH}/${id}`, {
          headers,
        });
        setCar(res.data);
      } catch (error) {
        if (error.response.status === 401) {
          removeLogin();
        }
      }
    };
    getSingleCar(carId);
  }, [carId]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-2/3">
        <div className="avatar flex justify-center">
          <div className="rounded-full bg-gray-200 ring-offset-base-100 ring-offset-2 w-96">
            <img
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                border: 'none',
                objectFit: 'contain',
              }}
              src={car.image}
              alt="Car"
            />
          </div>
        </div>
      </div>
      <div className="w-1/3 ml-8">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <tbody>
              <tr>
                <td className="text-2xl font-bold">{car.name}</td>
              </tr>
              <tr>
                <td className="text-lg">{car.description}</td>
              </tr>
              <tr>
                <td className="text-lg mt-4">
                  Price:
                  {car.price}
                </td>
              </tr>
            </tbody>
          </table>
          <Link
            to={`/reserve-car/${carId}`}
            className="mt-4 bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded text-center flex items-center justify-center"
            style={{ paddingBottom: '10px' }}
          >
            Reserve Car
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarDetailPage;
