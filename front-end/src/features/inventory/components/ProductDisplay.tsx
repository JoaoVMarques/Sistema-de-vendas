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
        <Col md={ 6 }><span>{ product.name }</span></Col>
        <Col md={ 2 } className="text-center"><span>R$ { product.price }</span></Col>
        <Col md={ 2 } className="text-center"><span>{ product.stock }</span></Col>
        <Col md={ 2 } className="text-end">
          <Button
            variant="outline-primary"
            size="sm"
            className="border-0"
            onClick={ () => console.log('Edit') }
            title="Remover item"
          >
            <PencilFill />
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}
