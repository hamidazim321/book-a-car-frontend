import { Route, Routes } from 'react-router';
import AddCar from './pages/AddCar';
import Layout from './pages/Layout';
import DeleteCar from './pages/DeleteCar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { getUser } from './helpers/storage';

function App() {
  const loggedIn = getUser() !== null;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {loggedIn && (
          <>
            <Route index element={<AddCar />} />
            <Route path="/add-car" element={<AddCar />} />
            <Route path="/delete-car" element={<DeleteCar />} />
            <Route path="/reserve-car" element={<AddCar />} />
            <Route path="/reserve-car/:id" element={<AddCar />} />
            <Route path="*" element={<AddCar />} />
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
