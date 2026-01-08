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
        <Col md={ 7 }>
          <span>{ product.name }</span>
        </Col>
        <Col md={ 3 }>
          <span>R$ { product.price }</span>
        </Col>
        <Col md={ 2 } className="text-end">
          <Button className="btn-danger" onClick={ () => removeProduct(product.id) }>
            X
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>

  );
}

