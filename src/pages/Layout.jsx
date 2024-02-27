import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import NavigationPanel from '../components/NavigationPanel';
import { clearCarMessages } from '../redux/car/carSlice';
import { clearReservationsMessages } from '../redux/reservations/reservationsSlice';
import { clearAuthMessages } from '../redux/auth/authSlice';

export default function Layout() {
  const dispatch = useDispatch();
  const carState = useSelector((state) => state.car);
  const reservationState = useSelector((state) => state.reservations);
  const authState = useSelector((state) => state.auth);

  useEffect(() => {
    if (carState.error || carState.success || carState.info) {
      if (carState.error) {
        toast.error(`Error! ${carState.error}`, {
          position: 'top-center',
        });
      }
      if (carState.success) {
        toast.success(`Success! ${carState.success}`, {
          position: 'top-center',
        });
      }
      if (carState.info) {
        toast.info(`Info! ${carState.info}`, {
          position: 'top-center',
        });
      }
      dispatch(clearCarMessages());
    }
  },
  [carState.error, carState.success, carState.info, dispatch]);

  useEffect(() => {
    if (reservationState.error || reservationState.success || reservationState.info) {
      if (reservationState.error) {
        toast.error(`Error! ${reservationState.error}`, {
          position: 'top-center',
        });
      }
      if (reservationState.success) {
        toast.success(`Success! ${reservationState.success}`, {
          position: 'top-center',
        });
      }
      if (reservationState.info) {
        toast.info(`Info! ${reservationState.info}`, {
          position: 'top-center',
        });
      }
      dispatch(clearReservationsMessages());
    }
  },
  [reservationState.error, reservationState.success, reservationState.info, dispatch]);

  useEffect(() => {
    if (authState.error || authState.success || authState.info) {
      if (authState.error) {
        toast.error(`Error! ${authState.error}`, {
          position: 'top-center',
        });
      }
      if (authState.success) {
        toast.success(`Success! ${authState.success}`, {
          position: 'top-center',
        });
      }
      if (authState.info) {
        toast.info(`Info! ${authState.info}`, {
          position: 'top-center',
        });
      }
      dispatch(clearAuthMessages());
    }
  },
  [authState.error, authState.success, authState.info, dispatch]);

  return (
    <main className="flex">
      <ToastContainer />
      <section className="w-min fixed md:relative z-10 md:z-auto">
        <NavigationPanel />
      </section>
      <section className="flex-grow border-black px-2">
        <Outlet />
      </section>
    </main>
  );
}
