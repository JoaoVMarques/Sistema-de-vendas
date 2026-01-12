import { Col, Container, Row } from 'react-bootstrap';
import { Header } from '../components/Header';
import '../styles/styles.css';
import { SearchBar } from '../components/SearchBar';
import { useSearch } from '../hooks/useSearch';
import { useProducts } from '../hooks/queries/useProducts';
import { InventoryProductsDisplay } from '../features/inventory';

export function InventoryPage() {
  const { data: productsData } = useProducts();

  const {
    input,
    handleSearch,
    onKeyPress,
  } = useSearch();

  const handleSearchBarKeyPress = (event: React.KeyboardEvent) => {
    const productTarget = productsData;
    onKeyPress(
      event,
      2,
      () => {
        if (productTarget) {
          console.log('event');
        }
      },
    );
  };

  return (
    <div className="selling-page-bg">
      <Container fluid className="p-0">
        <Row className="g-0">
          <Col md={ 2 }
            className="p-0 shadow">
            <Header SelectedPage={ 'inventory' } />
          </Col>
          <Col md={ 10 }>
            <SearchBar
              input={ input }
              handleSearch={ handleSearch }
              onKeyPress={ handleSearchBarKeyPress }
            />
            <Container className="p-4">
              <InventoryProductsDisplay />
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}