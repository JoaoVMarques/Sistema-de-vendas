import { useState } from 'react';
import SearchBar from './searchBar';
import { ProductType } from '../../types/products';
import ProductsDisplay from './ProductsDisplay';
import { Container, Row } from 'react-bootstrap';

function SellingPage() {
  const [searchResults, setSearchResults] = useState<ProductType[]>([]);

  return (
    <Container className='mt-2'>
      <Row>
        <SearchBar setSearchResults={setSearchResults} />
        <ProductsDisplay searchResults={searchResults} />
      </Row>
    </Container>
  );
}

export default SellingPage;
