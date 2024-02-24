import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { addCar } from '../redux/car/carThunk';
import { toastError, toastSuccess } from '../redux/toast/toastSlice';
import LoadingSpinner from '../components/LoadingSpinner';

export default function AddCar() {
  const { error, loading } = useSelector((state) => state.car);
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (image) {
      formData.set('car[image]', image);
    } else {
      formData.delete('car[image]');
    }
    dispatch(addCar(formData)).then((result) => {
      if (result.meta.requestStatus === 'fulfilled') {
        navigate('/');
        dispatch(toastSuccess('added car successfully'));
      }
    });
  };

  useEffect(() => {
    if (error) {
      dispatch(toastError(error));
    }
  }, [error, dispatch]);

  return (
    <div className="h-screen flex flex-col justify-center md:p-0">
      {loading && <LoadingSpinner />}
      <div className="mb-3">
        <h1 className="text-center font-mono mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900">Add a car</h1>
      </div>
      <form
        className="flex flex-col w-full gap-3 md:w-3/4 mx-auto"
        onSubmit={handleSubmit}
      >
        <div>
          <input required type="text" name="car[name]" autoComplete="car name" placeholder="Car Name" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <textarea required id="message" name="car[description]" rows="4" autoComplete="car description" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Car Description..." />
        </div>
        <div>
          <input required type="text" name="car[manufacturer]" placeholder="Manufacturer Name" autoComplete="Manufacturer name" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <input required type="number" name="car[price]" autoComplete="car price" step="any" min={0} placeholder="Price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
        </div>
        <div>
          {/* eslint-disable jsx-a11y/label-has-associated-control */}
          <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="file-input">Car Image</label>
          <input
            required
            type="file"
            name="car[image]"
            accept="image/*"
            id="file-input"
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg p-1 cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
            onChange={(e) => {
              const file = e.target.files[0];
              const reader = new FileReader();

              reader.onload = (event) => {
                const imageDataUrl = event.target.result;
                setImage(imageDataUrl);
              };

              reader.readAsDataURL(file);
            }}
          />
          {/* eslint-enable jsx-a11y/label-has-associated-control */}
        </div>
        <button type="submit" disabled={loading} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Add Car</button>
      </form>
    </div>
  );
}
