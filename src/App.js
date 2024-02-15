import { Route, Routes } from 'react-router';
import AddCar from './pages/AddCar';
import Layout from './pages/Layout';
import DeleteCar from './pages/DeleteCar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/add-car" element={<AddCar />} />
        <Route path="/delete-car" element={<DeleteCar />} />
      </Route>
    </Routes>
  );
}

export default App;
