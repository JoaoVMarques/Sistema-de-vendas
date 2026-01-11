import { Col, Container, Row } from 'react-bootstrap';
import { ProductsDisplay, ShoppingCart, useCart } from '../features/selling';
import '../styles/styles.css';
import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';
import { useSearch } from '../hooks/useSearch';

export function CartPage() {
  const {
    input,
    setInput,
    onKeyPress,
    highlightedIndex,
    setHighlightedIndex,
    onSearch,
  } = useSearch();

  const {
    removeProduct,
    changeProductQuantity,
    setCartProduct,
    selectedProduct,
  } = useCart();

  return (
    <div className="selling-page-bg" style={ { minHeight: '100vh' } }>
      <Container fluid className="p-0">
        <Row className="g-0">
          <Col md={ 2 }
            className="p-0 shadow">
            <Header SelectedPage={ 'cart' } />
          </Col>
          <Col md={ 10 }>
            <div className="p-3 bg-white border-bottom shadow">
              <SearchBar
                input={ input }
                setInput={ setInput }
                onKeyPress={ onKeyPress }
              />
            </div>
            <Container className="p-4">
              <div className="mb-3">
                <ProductsDisplay
                  searchBarInput={ input }
                  onSearch={ onSearch }
                  setHighlightedIndex={ setHighlightedIndex }
                  highlightedIndex={ highlightedIndex }
                  onSelect={ setCartProduct }
                />
              </div>
              <ShoppingCart
                handleQuantityChange={ changeProductQuantity }
                removeProduct={ removeProduct }
                selectedProducts={ selectedProduct }
              />
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}