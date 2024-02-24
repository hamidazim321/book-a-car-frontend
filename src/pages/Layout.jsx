import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import NavigationPanel from '../components/NavigationPanel';
import { clearToast } from '../redux/toast/toastSlice';

export default function Layout() {
  const { error, success, info } = useSelector((state) => state.toast);
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      toast.error(`Error! ${error}`, {
        position: 'top-center',
      });
      dispatch(clearToast());
    }
  }, [dispatch, error]);

  useEffect(() => {
    if (success) {
      toast.success(`Success! ${success}`, {
        position: 'top-center',
      });
      dispatch(clearToast());
    }
  }, [dispatch, success]);

  useEffect(() => {
    if (info) {
      toast.info(`Info! ${info}`, {
        position: 'top-center',
      });
      dispatch(clearToast());
    }
  }, [dispatch, info]);
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
