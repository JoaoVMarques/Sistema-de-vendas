import { Button, Col, ListGroup, Row } from 'react-bootstrap';
import { ProductType } from '../../selling/types/Products';
import { PencilFill } from 'react-bootstrap-icons';

interface props {
  product: ProductType
}

export function ProductDisplay({ product }: props) {
  const formattedPrice = product.price.toFixed(2).replace('.', ',');

  return (
    <ListGroup.Item as="li">
      <Row className="align-items-center">
        <Col md={ 6 }>
          <span className="fw-semibold text-dark">{ product.name }</span>
        </Col>
        <Col md={ 2 } className="text-center">
          <span className="fw-bold text-success">R$ { formattedPrice }</span>
        </Col>
        <Col md={ 2 } className="text-center">
          <span className="fw-bold text-secondary">{ product.stock }</span>
        </Col>
        <Col md={ 2 } className="text-end">
          <Button
            variant="outline-primary"
            size="sm"
            className="border-0"
            onClick={ () => console.log('Edit') }
            title="Editar item"
          >
            <PencilFill size={ 18 } />
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}