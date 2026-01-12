import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { SelectedProductType } from '../../types/Products';
import { ShoppingCartItem } from './ShoppingCartItem';
import { useMemo } from 'react';

export interface productsDisplayProps {
  selectedProducts: SelectedProductType[];
  removeProduct: (productId: number) => void;
  handleQuantityChange: (ProductId: number, ProductQuantity: number) => void;
}

export function ShoppingCart({ selectedProducts,
  removeProduct,
  handleQuantityChange }: productsDisplayProps) {

  const totalPrice = useMemo(() => {
    return selectedProducts.reduce((acc, product) => {
      return acc + (product.price * product.quantity);
    }, 0);
  }, [selectedProducts]);

  return (
    <Container>
      <Row className="mt-3 justify-content-between align-items-start">
        <Col md={ 7 } className="white-container p-3 rounded shadow">
          <h4>Carrinho</h4>

          <ListGroup className="mb-0">
            <ListGroup.Item className="border-0 p-3 bg-transparent">
              <Row>
                <Col md={ 4 }><span className="fw-bold">Produto</span></Col>
                <Col md={ 3 }><span className="fw-bold">Quantidade</span></Col>
                <Col md={ 3 }><span className="fw-bold">Preço</span></Col>
                <Col md={ 2 } />
              </Row>
            </ListGroup.Item>
          </ListGroup>

          <ListGroup as="ul" variant="flush">
            {
              selectedProducts.map((product) => {
                return <ShoppingCartItem
                  handleQuantityChange={ handleQuantityChange }
                  removeProduct={ removeProduct }
                  product={ product }
                  key={ product.id }
                />;
              })
            }
          </ListGroup>
        </Col>
        <Col md={ 4 } className="shadow white-container p-3 rounded">
          <Row>
            <h4>Visão Geral</h4>
          </Row>
          <Row className="mt-2 align-items-center">
            <Col>
              <span className="text-secondary">Preço Total:</span>
            </Col>
            <Col className="text-end">
              <span className="fw-bold fs-5"> R$ { totalPrice.toFixed(2) } </span>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <hr className="m-0"/>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}