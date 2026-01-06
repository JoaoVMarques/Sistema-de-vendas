import { useEffect, useState } from 'react';
import SearchBar from './searchBar';
import { ProductType } from '../../types/products';
import ProductsDisplay from './ProductsDisplay';
import { Container, Row } from 'react-bootstrap';
import { getAllProducts } from '../../services/productsService';

function SellingPage() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [searchResults, setSearchResults] = useState<ProductType[]>([]);

  useEffect(() => {
  const fetchData = async () => {
    const productsList = await getAllProducts();
    setProducts(productsList)
    };
    
    fetchData();
  }, []);

  const handleSearch = (value: string) => {
    if (!value.trim()) {
      setSearchResults([]);
      return;
    }

    const result = products.filter(product =>
      product.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    
    setSearchResults(result)
  };

  return (
    <Container className='mt-2'>
      <Row>
        <SearchBar onSearch={handleSearch} />
        <ProductsDisplay searchResults={searchResults} />
      </Row>
    </Container>
  );
}

export default SellingPage;
