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
)
}    