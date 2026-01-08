import { Button, Col, ListGroup, Row } from 'react-bootstrap';
import { ProductType } from '../../types/Products';

export interface productsDisplayProps {
  product: ProductType;
}

export function ShoppingCartItem({ product }: productsDisplayProps) {
  return (
    <ListGroup.Item as="li" variant="primary" action>
      <Row className="align-items-center">
        <Col>
          { product.name }
        </Col>
        <Col xs="auto">
          <Button>
            X
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>

  );
}

