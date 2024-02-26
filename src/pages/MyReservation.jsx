import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReservations } from '../redux/reservations/reservationsThunk';
import LoadingSpinner from '../components/LoadingSpinner';

const MyReservation = () => {
  const dispatch = useDispatch();
  const { reservations, loading } = useSelector((state) => state.reservations);
  useEffect(() => {
    dispatch(getReservations());
  }, [dispatch]);
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {loading && <LoadingSpinner />}
      {reservations.length === 0 && !loading && (
        <p className="text-2xl font-semibold text-center">
          You have no reservations yet.
        </p>
      )}
      {reservations.length > 0 && (
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">User ID</th>
            <th className="px-4 py-2">Car Name</th>
            <th className="px-4 py-2">Car Model</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">City</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.id} className="bg-gray-100">
              <td className="border px-4 py-2">{reservation.user_id}</td>
              <td className="border px-4 py-2">{reservation.car?.name}</td>
              <td className="border px-4 py-2">{reservation.car?.manufacturer}</td>
              <td className="border px-4 py-2">{reservation.date}</td>
              <td className="border px-4 py-2">{reservation.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
    </div>
  );
};
export default MyReservation;
