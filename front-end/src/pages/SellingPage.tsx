import { Col, Container, Row } from 'react-bootstrap';
import { SearchBar, ProductsDisplay, ShoppingCart, useSelling } from '../features/selling';

function SellingPage() {
  const {
    availableProducts,
    selectedProducts,
    highlightedIndex,
    searchbarInput,

    setHighlightedIndex,
    setSearchbarInput,

    handleSearch,
    onEnter,
    clickOnProduct,
  } = useSelling();

  return (
    <Container className="mt-2">
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

        <Col className="mt-1">
          <ProductsDisplay
            products={ availableProducts }
            setHighlightedIndex={ setHighlightedIndex }
            highlightedIndex={ highlightedIndex }
            onSelect={ clickOnProduct }
          />
        </Col>

        <ShoppingCart selectedProducts={ selectedProducts } />
      </Row>
    </Container>
  );
}

export default SellingPage;
