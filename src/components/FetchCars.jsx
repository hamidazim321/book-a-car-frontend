/* eslint-disable comma-dangle */
/* eslint-disable comma-spacing */
/* eslint-disable quotes */

import { useMediaQuery } from 'react-responsive';

import { Link } from "react-router-dom";
import {
  FaChevronLeft,
  FaChevronRight,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
// import splitSentence from "../helpers/SplitSentence";

const FetchCars = () => {
  const [groupSize, setGroupSize] = useState(3);

  const handleMediaQueryChangeSmall = (matches) => {
    if (matches) {
      setGroupSize(1);
    }
  };

  const handleMediaQueryChangeLarge = (matches) => {
    if (matches) {
      setGroupSize(3);
    }
  };

  useMediaQuery(
    { query: '(max-width: 767px)' },
    undefined,
    handleMediaQueryChangeSmall
  );

  useMediaQuery(
    { query: '(min-width: 768px)' },
    undefined,
    handleMediaQueryChangeLarge
  );

  const [cars, setCars] = useState([]);
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  // const groupSize = 3;
  const totalGroups = Math.ceil(cars.length / groupSize);

  const handleNextGroup = () => {
    setCurrentGroupIndex((prevIndex) => (prevIndex + 1) % totalGroups);
  };

  const handlePrevGroup = () => {
    setCurrentGroupIndex(
      (prevIndex) => (prevIndex - 1 + totalGroups) % totalGroups
    );
  };

  const displayByThree = cars.slice(
    currentGroupIndex * groupSize,
    currentGroupIndex * groupSize + groupSize
  );

  useEffect(() => {
    const fetchCarsData = async () => {
      const res = await axios.get("http://127.0.0.1:3001/api/v1/cars");
      setCars(res.data);
    };
    fetchCarsData();
  }, []);

  return (
    /* JSX elements start */
    <div>
      <h1 className="text-4xl font-bold text-center my-4">Latest Models</h1>
      <h2 className="text-lg text-center">Please select a car model.</h2>
      <div className="flex flex-col gap-8 sm:flex-row mt-8">
        {displayByThree.length > 0 ? (
          // Inside JSX
          displayByThree.map((car) => (
            <Link to={`/car-details/${car.id}`} key={car.id} className="card">
              <div className="avatar">
                <div className="rounded-full bg-gray-200 ring-offset-base-100 ring-offset-2 w-56">
                  <img
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      border: 'none',
                      objectFit: 'contain'
                    }} // Ensure image fits within the container
                    src={car.image}
                    alt="avatar"
                  />

                </div>
              </div>
              <div className="card-body">
                <p>{car.name?.split(' ', 4).join(' ')}</p>
                {' '}
                {/* Use optional chaining */}
                <div className="flex items-center justify-between">
                  <div className="badge badge-outline">
                    <FaFacebookF />
                  </div>
                  <div className="badge badge-outline">
                    <FaLinkedinIn />
                  </div>
                </div>
              </div>
            </Link>
          ))

        ) : (
          <p> no Data found</p>
        )}
        <>
          <button
            type="button"
            onClick={handlePrevGroup}
            className="absolute top-0 -left-15 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
          >
            <span className="inline-flex btn btn-primary bg-lime-500 items-center justify-center w-10 h-10 hover:bg-lime-500">
              <FaChevronLeft />
              {' '}
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            onClick={handleNextGroup}
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          >
            <span className="inline-flex btn btn-primary bg-lime-500 items-center justify-center w-10 h-10 hover:bg-lime-500">
              <FaChevronRight />
              <span className="sr-only">Next</span>
            </span>
          </button>
        </>
      </div>
    </div>
    /* JSX elements end */
  );
};

export default FetchCars;
