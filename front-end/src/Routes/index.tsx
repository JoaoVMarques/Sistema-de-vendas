import { Routes, Route } from 'react-router-dom';
import SellingPage from '../pages/SellingPage';

function Router() {
  return (
    <Routes>
      <Route path="/cart" element={ <SellingPage/ > } />
    </Routes>
  );
}

export default Router;
