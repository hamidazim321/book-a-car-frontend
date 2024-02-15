import { Route, Routes } from 'react-router';
import AddCar from './pages/AddCar';
import Layout from './pages/Layout';
import DeleteCar from './pages/DeleteCar';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/add-car" element={<AddCar />} />
        <Route path="/delete-car" element={<DeleteCar />} />
      </Route>
    </Routes>
  );
}

export default App;
