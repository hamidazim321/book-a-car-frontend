import { Route, Routes } from 'react-router';
import AddCar from './pages/AddCar';
import Layout from './pages/Layout';
import DeleteCar from './pages/DeleteCar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { getUser } from './helpers/storage';
import CarDetails from './pages/CarDetails';
import MyReservation from './pages/MyReservation';
import HomePage from './pages/HomePage';
import ReserveCar from './pages/ReserveCar';

function App() {
  const loggedIn = getUser() !== null;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {loggedIn && (
          <>
            <Route index element={<HomePage />} />
            <Route path="/add-car" element={<AddCar />} />
            <Route path="/delete-car" element={<DeleteCar />} />
            <Route path="/reserve-car" element={<ReserveCar />} />
            <Route path="/reserve-car/:id" element={<ReserveCar />} />
            <Route
              path="/my-reservations"
              element={<MyReservation />}
            />
            <Route
              path="/car-details/:carId"
              element={<CarDetails />}
            />
            <Route path="*" element={<HomePage />} />
          </>
        )}
        {!loggedIn && (
          <>
            <Route index element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Login />} />
          </>
        )}
      </Route>
    </Routes>
  );
}

export default App;
