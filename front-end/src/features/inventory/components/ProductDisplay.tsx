import { Button, Col, ListGroup, Row } from 'react-bootstrap';
import { ProductType } from '../../selling/types/Products';
import { PencilFill } from 'react-bootstrap-icons';

interface productDisplayProps {
  product: ProductType
}

export function ProductDisplay({ product }: productDisplayProps) {
  return (
    <ListGroup.Item as="li">
      <Row className="align-items-center">
        <Col md={ 7 }><span>{ product.name }</span></Col>
        <Col md={ 2 }><span>R$ { product.price }</span></Col>
        <Col md={ 2 }><span>{ product.stock }</span></Col>
        <Col md={ 1 }>
          <Button className="btn-info" onClick={ () => console.log('Edit') }>
            <PencilFill />
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}
