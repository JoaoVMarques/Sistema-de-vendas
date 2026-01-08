import { Col, Container, Row } from 'react-bootstrap';
import { SearchBar, ProductsDisplay, ShoppingCart, useSelling } from '../features/selling';
import '../styles/styles.css';
import { Header } from '../components/Header';

function SellingPage() {
  const {
    availableProducts,
    selectedProducts,
    highlightedIndex,
    searchbarInput,
    setHighlightedIndex,
    setSearchbarInput,
    handleSearch,
    removeProduct,
    onEnter,
    clickOnProduct,
  } = useSelling();

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
                onSearch={ handleSearch }
                setHighlightedIndex={ setHighlightedIndex }
                highlightedIndex={ highlightedIndex }
                onEnter={ onEnter }
                input={ searchbarInput }
                resultsCount={ availableProducts.length }
                setInput={ setSearchbarInput }
              />
            </div>
            <Container className="p-4">
              <div className="mb-3">
                <ProductsDisplay
                  products={ availableProducts }
                  setHighlightedIndex={ setHighlightedIndex }
                  highlightedIndex={ highlightedIndex }
                  onSelect={ clickOnProduct }
                />
              </div>
              <ShoppingCart
                removeProduct={ removeProduct }
                selectedProducts={ selectedProducts }
              />
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SellingPage;