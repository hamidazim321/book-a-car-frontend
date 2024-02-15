import React from 'react';

export default function DeleteCar() {
  const tempCars = ['car1', 'car2', 'car3', 'car4', 'car5', 'car6'];
  return (
    <section className="p-4">
      <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        {
          tempCars.map((car) => (
            <li className="pb-3 sm:pb-4" key={car}>
              <div>
                <p className="font-semibold text-xl">
                  {car}
                </p>
              </div>
              <div>
                <button
                  type="button"
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
                >
                  Delete Car
                </button>
              </div>
            </li>
          ))
        }
      </ul>
    </section>
  );
}
