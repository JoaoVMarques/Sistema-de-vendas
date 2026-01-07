import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { getAllProducts } from '../services/productsService';
import { ProductType } from '../features/selling/types/products';
import { SearchBar, ProductsDisplay, ShoppingCart } from '../features/selling';

function SellingPage() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [searchResults, setSearchResults] = useState<ProductType[]>([]);
  const [selectedProductIds, setSelectedProductsIds] = useState<number[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [searchbarInput, setSearchbarInput] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const productsList = await getAllProducts();
      setProducts(productsList);
    };

    fetchData();
  }, []);

  const availableProducts = searchResults.filter(
    product => !selectedProductIds.includes(product.id),
  );

  const selectedProducts = products.filter(product =>
    selectedProductIds.includes(product.id),
  );

  const handleSearch = (value: string) => {
    if (!value.trim()) {
      setSearchResults([]);
      return;
    }

    const result = products.filter(product =>
      product.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()),
    );

    setSearchResults(result);
  };

  const onEnter = (selectProductIndex: number) => {
    if (availableProducts.length > 0) {
      const firstProduct = availableProducts[selectProductIndex];
      setSelectedProductsIds(prev => [... prev, firstProduct.id]);
      setSearchResults([]);
    }
  };

  const selectProduct = (product: ProductType) => {
    setSelectedProductsIds(prev => [...prev, product.id]);
    setSearchbarInput('');
    handleSearch('');
  };

  return (
    <Container className="mt-2">
      <Row>
        <SearchBar
          onSearch={ handleSearch }
          onHighlightChange={ setHighlightedIndex }
          onEnter={ onEnter }
          input={ searchbarInput }
          resultsCount={ availableProducts.length }
          setInput={ setSearchbarInput }
        />
        <Col className="mt-1">
          <ProductsDisplay
            products={ availableProducts }
            highlightedIndex={ highlightedIndex }
            onSelect={ (product: ProductType) =>
              selectProduct(product)
            }
          />
        </Col>
        <ShoppingCart selectedProducts={ selectedProducts } />
      </Row>
    </Container>
  );
}

export default SellingPage;
