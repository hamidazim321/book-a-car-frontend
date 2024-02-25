import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import FetchCars from '../components/FetchCars';
import { toastError } from '../redux/toast/toastSlice';
import LoadingSpinner from '../components/LoadingSpinner';

const HomePage = () => {
  const { error, loading } = useSelector((state) => state.car);
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      dispatch(toastError(error));
    }
  }, [dispatch, error]);
  return (
    <div>
      {loading && <LoadingSpinner />}
      <FetchCars />
    </div>
  );
};
export default HomePage;
