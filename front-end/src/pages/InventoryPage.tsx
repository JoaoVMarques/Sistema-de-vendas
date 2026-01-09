import { Col, Container, Row } from 'react-bootstrap';
import { Header } from '../components/Header';
import '../styles/styles.css';

export function InventoryPage() {
  return (
    <Container fluid className="p-0">
      <Row className="g-0">
        <Col md={ 2 }
          className="p-0 shadow">
          <Header SelectedPage={ 'inventory' } />
        </Col>
      </Row>
    </Container>
  );
}