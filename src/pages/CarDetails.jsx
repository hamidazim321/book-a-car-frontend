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
  