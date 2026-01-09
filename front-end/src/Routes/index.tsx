import { Routes, Route } from 'react-router-dom';
import { CartPage, HomePage, InventoryPage } from '../pages';

function Router() {
  return (
    <Routes>
      <Route path="/cart" element={ <CartPage/ > } />
      <Route path="/home" element={ <HomePage/ > } />
      <Route path="/inventory" element={ <InventoryPage/ > } />
    </Routes>
  );
}

export default Router;
