import React from 'react';

export default function AddCar() {
  return (
    <div className="h-screen flex flex-col justify-center md:p-0">
      <div className="mb-3">
        <h1 className="text-center font-mono mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900">Add a car</h1>
      </div>
      <form
        className="flex flex-col w-full gap-3 md:w-3/4 mx-auto"
      >
        <div>
          <input type="text" autoComplete="car name" placeholder="Car Name" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <textarea id="message" rows="4" autoComplete="car description" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Car Description..." />
        </div>
        <div>
          <input type="text" placeholder="Manufacturer Name" autoComplete="Manufacturer name" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <input type="number" autoComplete="car price" step="any" min={0} placeholder="Price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
        </div>
        <div>
          {/* eslint-disable jsx-a11y/label-has-associated-control */}
          <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="file-input">Car Image</label>
          <input type="file" id="file-input" className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg p-1 cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none" />
          {/* eslint-enable jsx-a11y/label-has-associated-control */}
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Add Car</button>
      </form>
    </div>
  );
}
