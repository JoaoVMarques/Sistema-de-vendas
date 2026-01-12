import { Button, Col, Form, ListGroup, Row } from 'react-bootstrap';
import { SelectedProductType } from '../../types/Products';

interface productsDisplayProps {
  product: SelectedProductType;
  removeProduct: (productId: number) => void;
  handleQuantityChange: (ProductId: number, ProductQuantity: number) => void;
}

export function ShoppingCartItem({ product,
  removeProduct,
  handleQuantityChange }: productsDisplayProps) {
  return (
    <ListGroup.Item as="li" variant="primary" action>
      <Row className="align-items-center">
        <Col md={ 4 }><span>{ product.name }</span></Col>
        <Col md={ 3 }><Form.Control
          type="number"
          className="w-75"
          min="1"
          value={ product.quantity }
          onChange={ (e) => handleQuantityChange(product.id, parseInt(e.target.value)) }
        /></Col>
        <Col md={ 3 }><span>R$ { product.price * product.quantity }</span></Col>
        <Col md={ 2 } className="text-end">
          <Button className="btn-danger" onClick={ () => removeProduct(product.id) }>
            X
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>

  );
}

