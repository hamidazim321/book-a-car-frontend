import { useSelector } from 'react-redux';
import FetchCars from '../components/FetchCars';
import LoadingSpinner from '../components/LoadingSpinner';

const HomePage = () => {
  const { loading } = useSelector((state) => state.car);
  return (
    <div>
      {loading && <LoadingSpinner />}
      <FetchCars />
    </div>
  );
};
export default HomePage;
