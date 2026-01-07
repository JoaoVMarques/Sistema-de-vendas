import { Routes, Route, Navigate } from 'react-router-dom';
import SellingPage from '../pages/SellingPage';

function Router() {
  return (
    <Routes>
      <Route path="/selling" element={ <SellingPage/ > } />
      <Route path="*" element={ <Navigate to="/selling" replace /> } />
    </Routes>
  );
}

export default Router;
