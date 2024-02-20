import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';
const CarDetails = () => {
    const [car, setCar] = useState({});
    const { carId } = useParams();
  
    useEffect(() => {
      const getSingleCar = async () => {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${carId}`,
        );
        setCar(res.data);
      };
      getSingleCar();
    }, []);
    return (
        <div className="flex w-full">
          <div className="w-2/3">
            <div className="avatar">
              <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  alt="avatar"
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

)
}    
export default CarDetails;
