import { Col, Container, Row } from 'react-bootstrap';
import { ProductsDisplay, ShoppingCart, useCart } from '../features/selling';
import '../styles/styles.css';
import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';
import { useSearch } from '../hooks/useSearch';
import { useMemo } from 'react';

export function CartPage() {
  const {
    input,
    handleSearch,
    onKeyPress,
    highlightedIndex,
    setHighlightedIndex,
    onSearch,
    searchResults,
  } = useSearch();

  const {
    removeProduct,
    changeProductQuantity,
    setCartProduct,
    selectedProduct,
    removeCartItemsFromList,
  } = useCart();

  const availableProducts = useMemo(() => {
    return removeCartItemsFromList(searchResults) || [];
  }, [searchResults, removeCartItemsFromList]);

  const handleSearchBarKeyPress = (event: React.KeyboardEvent) => {
    const productTarget = availableProducts[highlightedIndex];
    onKeyPress(
      event,
      availableProducts.length,
      () => {
        if (productTarget) {
          setCartProduct(productTarget.id);
        }
      },
    );
  };

  return (
    <div className="selling-page-bg min-vh-100">
      <Container fluid className="p-0">
        <Row className="g-0">
          <Col md={ 2 } className="p-0 shadow">
            <Header SelectedPage={ 'cart' } />
          </Col>
          <Col md={ 10 }>
            <div className="p-3 bg-white border-bottom shadow">
              <SearchBar
                input={ input }
                handleSearch={ handleSearch }
                onKeyPress={ handleSearchBarKeyPress }
              />
            </div>
            <Container className="p-4">
              <div className="mb-3">
                <ProductsDisplay
                  searchedProducts={ availableProducts }
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