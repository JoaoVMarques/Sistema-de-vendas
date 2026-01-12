import { Form, Row, Col, Button, ListGroup } from 'react-bootstrap';
import { TrashFill } from 'react-bootstrap-icons'; // Certifique-se de importar o ícone
import { SelectedProductType } from '../../types/Products';

interface props {
  product: SelectedProductType;
  removeProduct: (productId: number) => void;
  handleQuantityChange: (ProductId: number, ProductQuantity: number) => void;
}

export function ShoppingCartItem({
  product,
  removeProduct,
  handleQuantityChange,
}: props) {

  const totalPrice = (product.price * product.quantity)
    .toFixed(2)
    .replace('.', ',');

  return (
    <ListGroup.Item as="li" variant="primary" action>
      <Row className="align-items-center">
        <Col md={ 4 }>
          <span className="fw-semibold text-dark">{ product.name }</span>
        </Col>
        <Col md={ 3 } className="d-flex justify-content-center">
          <Form.Control
            type="number"
            className="text-center border-secondary"
            style={ { width: '70px' } }
            min="1"
            value={ product.quantity }
            onChange={ (e) => {
              const val = parseInt(e.target.value);
              handleQuantityChange(product.id, val);
            } }
          />
        </Col>
        <Col md={ 3 } className="text-center">
          <span className="fw-bold text-success">R$ { totalPrice }</span>
        </Col>
        <Col md={ 2 } className="text-end">
          <Button
            variant="outline-danger"
            size="sm"
            className="border-0"
            onClick={ () => removeProduct(product.id) }
            title="Remover item"
          >
            <TrashFill size={ 18 } />
          </Button>
        </Col>

      </Row>
    </ListGroup.Item>
  );
}