import { Button, Col, Form, ListGroup, Row } from 'react-bootstrap';
import { ProductType } from '../../selling/types/Products';
import { FloppyFill } from 'react-bootstrap-icons';
import { useState } from 'react';

interface props {
  product: ProductType
  saveButton: (product: ProductType) => void
}

export function ProductDisplayEditing({ product, saveButton }: props) {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [stock, setStock] = useState(product.stock);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newProduct = {
      name,
      price,
      stock,
      id: product.id,
    };
    saveButton(newProduct);
  };

  return (
    <ListGroup.Item as="li">
      <Form onSubmit={ handleSubmit }>
        <Row className="align-items-center">
          <Col md={ 6 }>
            <Form.Control
              type="text"
              value={ name }
              className="border-secondary"
              onChange={ (event) => setName(event.target.value) }
            />
          </Col>
          <Col md={ 2 } className="text-center">
            <Form.Control
              type="number"
              value={ price }
              className="text-center border-secondary"
              onChange={ (event) => setPrice(Number(event.target.value)) }
            />
          </Col>
          <Col md={ 2 } className="text-center">
            <Form.Control
              type="number"
              value={ stock }
              className="text-center border-secondary"
              onChange={ (event) => setStock(Number(event.target.value)) }
            />
          </Col>
          <Col md={ 2 } className="text-end">
            <Button
              type="submit"
              variant="outline-primary"
              size="sm"
              className="border-0"
              title="Editar item"
            >
              <FloppyFill size={ 18 } />
            </Button>
          </Col>
        </Row>
      </Form>
    </ListGroup.Item>
  );
}