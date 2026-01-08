import { Button, Col, ListGroup, Row } from 'react-bootstrap';
import { ProductType } from '../../types/Products';

export interface productsDisplayProps {
  product: ProductType;
  removeProduct: (productId: number) => void;
}

export function ShoppingCartItem({ product, removeProduct }: productsDisplayProps) {
  return (
    <ListGroup.Item as="li" variant="primary" action>
      <Row className="align-items-center">
        <Col>
          { product.name }
        </Col>
        <Col xs="auto">
          <Button onClick={ () => removeProduct(product.id) }>
            X
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>

  );
}

