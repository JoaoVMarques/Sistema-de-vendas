import { useEffect, useState } from 'react';
import SearchBar from './searchBar';
import { ProductType } from '../../types/products';
import ProductsDisplay from './productsDisplay';
import { Col, Container, Row } from 'react-bootstrap';
import { getAllProducts } from '../../services/productsService';
import ShoppingCart from './shoppingCart';

function SellingPage() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [searchResults, setSearchResults] = useState<ProductType[]>([]);
  const [selectedProductIds, setSelectedProductsIds] = useState<number[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const productsList = await getAllProducts();
      setProducts(productsList);
    };
    
    fetchData();
  }, []);

  const availableProducts = searchResults.filter(
    product => !selectedProductIds.includes(product.id)
  );

  const selectedProduct = products.filter(product => 
    selectedProductIds.includes(product.id)
  );

  const handleSearch = (value: string) => {
    if(!value.trim()) {
      setSearchResults([]);
      return [];
    }

    const result = products.filter(product =>
      product.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    
    setSearchResults(result);
    return result
  };

  const onEnter = (selectProductIndex: number) => {
    if(availableProducts.length > 0) {
      const firstProduct = availableProducts[selectProductIndex];
      setSelectedProductsIds(prev => [... prev, firstProduct.id]);
      setSearchResults([]);
    }
  };

  return (
    <Container className="mt-2">
      <Row>
        <SearchBar 
          onSearch={handleSearch} 
          onHighlightChange={setHighlightedIndex} 
          onEnter={onEnter} />
        <Col className='mt-1'>
          <ProductsDisplay
            products={availableProducts}
            highlightedIndex={highlightedIndex}
            onSelect={(product: ProductType) =>
              setSelectedProductsIds(prev => [...prev, product.id])
            }
          />
        </Col>
        <ShoppingCart selectedProducts={ selectedProduct } />
      </Row>
    </Container>
  );
}

export default SellingPage;
