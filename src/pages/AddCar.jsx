import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addCar } from '../redux/car/carThunk';

export default function AddCar() {
  const dispatch = useDispatch();
  const fileInput = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = fileInput.current.files[0];
    reader.onloadend = () => {
      const formData = new FormData();
      formData.append('car[name]', e.target.elements['car[name]'].value);
      formData.append('car[description]', e.target.elements['car[description]'].value);
      formData.append('car[manufacturer]', e.target.elements['car[manufacturer]'].value);
      formData.append('car[price]', e.target.elements['car[price]'].value);
      formData.append('car[image]', reader.result);
      dispatch(addCar(formData));
    };
    reader.readAsDataURL(file);
  };
  return (
    <div className="h-screen flex flex-col justify-center md:p-0">
      <div className="mb-3">
        <h1 className="text-center font-mono mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900">Add a car</h1>
      </div>
      <form
        className="flex flex-col w-full gap-3 md:w-3/4 mx-auto"
        onSubmit={handleSubmit}
      >
        <div>
          <input type="text" name="car[name]" autoComplete="car name" placeholder="Car Name" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <textarea id="message" name="car[description]" rows="4" autoComplete="car description" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Car Description..." />
        </div>
        <div>
          <input type="text" name="car[manufacturer]" placeholder="Manufacturer Name" autoComplete="Manufacturer name" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <input type="number" name="car[price]" autoComplete="car price" step="any" min={0} placeholder="Price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
        </div>
        <div>
          {/* eslint-disable jsx-a11y/label-has-associated-control */}
          <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="file-input">Car Image</label>
          <input ref={fileInput} type="file" name="car[image]" accept="image/*" id="file-input" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg p-1 cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none" />
          {/* eslint-enable jsx-a11y/label-has-associated-control */}
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Add Car</button>
      </form>
    </div>
  );
}
