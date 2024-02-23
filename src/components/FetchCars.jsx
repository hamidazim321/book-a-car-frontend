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
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../redux/car/carThunk';
// import splitSentence from "../helpers/SplitSentence";

const FetchCars = () => {
  const [groupSize, setGroupSize] = useState(useMediaQuery({ query: '(max-width: 767px)' }) ? 1 : 3);

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

  // const [cars, setCars] = useState([]);
  const { cars, error } = useSelector((state) => state.car);
  const dispatch = useDispatch();

  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

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
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    /* JSX elements start */
    <div className="h-screen flex flex-col justify-center">
      <h1 className="text-4xl font-bold text-center my-4">Latest Models</h1>
      <h2 className="text-lg text-center">Please select a car model.</h2>
      <div className="relative flex flex-col gap-6 md:flex-row mt-8 md:justify-around">
        {displayByThree.length > 0 ? (
          // Inside JSX
          displayByThree.map((car) => (
            <Link to={`/car-details/${car.id}`} key={car.id} className="card">
              <div className="avatar flex justify-center">
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
              <div className="card-body text-center">
                <p>{car.name?.split(' ', 4).join(' ')}</p>
                {' '}
                {/* Use optional chaining */}
                <div className="flex items-center justify-around">
                  <div className="rounded-full w-8 h-8 flex justify-center items-center border border-gray-300 text-gray-300">
                    <FaFacebookF />
                  </div>
                  <div className="rounded-full w-8 h-8 flex justify-center items-center border border-gray-300 text-gray-300">
                    <FaLinkedinIn />
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p> no Data found</p>
        )}
        {error && (
          <div className="text-red-500">
            {error}
          </div>
        )}
        <>
          <button
            type="button"
            onClick={handlePrevGroup}
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full -ml-2 cursor-pointer"
          >
            <span className="inline-flex rounded-r-full text-white bg-lime-500 items-center justify-center w-10 h-10 hover:bg-lime-500">
              <FaChevronLeft />
              {' '}
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            onClick={handleNextGroup}
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full  -mr-2 cursor-pointer group focus:outline-none"
          >
            <span className="inline-flex rounded-l-full text-white bg-lime-500 items-center justify-center w-10 h-10 hover:bg-lime-500">
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
