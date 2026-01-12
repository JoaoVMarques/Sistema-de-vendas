import { Col, Container, Row } from 'react-bootstrap';
import { Header } from '../components/Header';
import '../styles/styles.css';
import { SearchBar } from '../components/SearchBar';
import { useSearch } from '../hooks/useSearch';
import { useProducts } from '../hooks/queries/useProducts';

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
    <Container fluid className="p-0">
      <Row className="g-0">
        <Col md={ 2 }
          className="p-0 shadow">
          <Header SelectedPage={ 'inventory' } />
        </Col>
        <Col>
          <SearchBar
            input={ input }
            handleSearch={ handleSearch }
            onKeyPress={ handleSearchBarKeyPress }
          />
        </Col>
      </Row>
    </Container>
  );
}