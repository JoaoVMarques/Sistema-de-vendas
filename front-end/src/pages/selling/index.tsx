import { useState } from 'react';
import SearchBar from './searchBar';
import { ProductType } from '../../types/products';

function SellingPage() {
  const [searchResults, setSearchResults] = useState<ProductType[]>([]);

  return (
    <>
      <SearchBar setSearchResults={setSearchResults} />
    </>
  );
}

export default SellingPage;
