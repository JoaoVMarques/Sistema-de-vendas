import { Col, ListGroup, Row } from 'react-bootstrap';
import { ProductType } from '../../selling/types/Products';

interface productDisplayProps {
  product: ProductType
}

export function ProductDisplay({ product }: productDisplayProps) {
  return (
    <ListGroup.Item as="li">
      <Row className="align-items-center">
        <Col md={ 8 }><span>{ product.name }</span></Col>
        <Col md={ 2 }><span>R$ { product.price }</span></Col>
        <Col md={ 2 }><span>{ product.stock }</span></Col>
      </Row>
    </ListGroup.Item>
  );
}
