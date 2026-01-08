import { Routes, Route, Navigate } from 'react-router-dom';
import SellingPage from '../pages/SellingPage';

function Router() {
  return (
    <Routes>
      <Route path="/cart" element={ <SellingPage/ > } />
      <Route path="*" element={ <Navigate to="/cart" replace /> } />
    </Routes>
  );
}

export default Router;
