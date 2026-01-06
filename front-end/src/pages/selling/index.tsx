import { useState } from 'react';
import SearchBar from './searchBar';
import { ProductType } from '../../types/products';
import ProductsDisplay from './ProductsDisplay';

function SellingPage() {
  const [searchResults, setSearchResults] = useState<ProductType[]>([]);

  return (
    <>
      <SearchBar setSearchResults={setSearchResults} />
      <ProductsDisplay searchResults={searchResults} />
    </>
  );
}

export default SellingPage;
