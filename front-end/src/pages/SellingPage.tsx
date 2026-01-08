import { Col, Container, Row } from 'react-bootstrap';
import { SearchBar, ProductsDisplay, ShoppingCart, useSelling } from '../features/selling';
import '../styles/styles.css';

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
    <div className="selling-page-bg">
      <div>
        <Row>
          <SearchBar
            onSearch={ handleSearch }
            setHighlightedIndex={ setHighlightedIndex }
            highlightedIndex={ highlightedIndex }
            onEnter={ onEnter }
            input={ searchbarInput }
            resultsCount={ availableProducts.length }
            setInput={ setSearchbarInput }
          />
          <Container>
            <Col className="mt-1">
              <ProductsDisplay
                products={ availableProducts }
                setHighlightedIndex={ setHighlightedIndex }
                highlightedIndex={ highlightedIndex }
                onSelect={ clickOnProduct }
              />
            </Col>
            <ShoppingCart removeProduct={ removeProduct } selectedProducts={ selectedProducts } />
          </Container>
        </Row>
      </div>
    </div>
  );
}

export default SellingPage;
