import { Button, Col, Form, ListGroup, Row } from 'react-bootstrap';
import { ProductType } from '../../selling/types/Products';
import { PencilFill } from 'react-bootstrap-icons';

interface props {
  product: ProductType
  setEditingId: (productId: number) => void
}

export function ProductDisplay({ product, setEditingId }: props) {
  const formattedPrice = product.price.toFixed(2).replace('.', ',');

  return (
    <ListGroup.Item as="li">
      <Row className="align-items-center h-100">
        <Col md={ 6 }>
          <Form.Control
            plaintext
            readOnly
            defaultValue={ product.name }
            className="fw-semibold text-dark px-0 cursor-default"
          />
        </Col>

        <Col md={ 2 } className="text-center">
          <Form.Control
            plaintext
            readOnly
            defaultValue={ `R$ ${formattedPrice}` }
            className="fw-bold text-success text-center cursor-default"
          />
        </Col>

        <Col md={ 2 } className="text-center">
          <Form.Control
            plaintext
            readOnly
            defaultValue={ product.stock }
            className="fw-bold text-secondary text-center cursor-default"
          />
        </Col>

        <Col md={ 2 } className="text-end">
          <Button
            variant="outline-primary"
            className="border-0"
            onClick={ () => setEditingId(product.id) }
            title="Editar item"
          >
            <PencilFill size={ 18 } />
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}