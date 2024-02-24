import { useParams } from 'react-router-dom'; // Updated import statement
import { useEffect, useState } from 'react';
import axios from 'axios';

const CarDetailPage = () => { // Renamed component to CarDetailPage
  const [car, setCar] = useState({});
  const { carId } = useParams();

  useEffect(() => {
    const getSingleCar = async () => {
      try {
        const res = await axios.get(
          `http://127.0.0.1:3001/api/v1/cars/${carId}`, // Updated API endpoint for fetching a single car
        );
        setCar(res.data);
      } catch (error) {
        console.error('Error fetching car:', error);
      }
    };
    getSingleCar();
  }, [carId]); // Added carId as a dependency to useEffect

  return (
    <div className="flex w-full">
      <div className="w-2/3">
        <div className="avatar">
          <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              src={car.image} // Assuming car.image contains the image URL
              alt="Car"
            />
          </div>
        </div>
      </div>
      <div className="w-1/3">
        <div className=" overflow-x-auto">
          <table className="table table-zebra">
            <tbody>
              <tr>
                <td>{car.title}</td>
              </tr>
              <tr>
                <td>{car.body}</td>
              </tr>
              <tr>
                <td>{car.userId}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CarDetailPage; // Exporting the CarDetailPage component
