import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import NavigationPanel from '../components/NavigationPanel';

export default function Layout() {
  const carState = useSelector((state) => state.car);
  const reservationState = useSelector((state) => state.reservations);
  const authState = useSelector((state) => state.auth);

  useEffect(() => {
    const error = authState.error || reservationState.error || carState.error;
    const success = authState.success || reservationState.success || carState.success;
    const info = authState.info || reservationState.info || carState.info;
    if (error) {
      toast.error(`Error! ${error}`, {
        position: 'top-center',
      });
    }
    if (success) {
      toast.success(`Success! ${success}`, {
        position: 'top-center',
      });
    }
    if (info) {
      toast.info(`Info! ${info}`, {
        position: 'top-center',
      });
    }
  }, [carState.error,
    reservationState.error,
    authState.error,
    authState.success,
    reservationState.success,
    carState.success,
    authState.info,
    reservationState.info,
    carState.info]);

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
