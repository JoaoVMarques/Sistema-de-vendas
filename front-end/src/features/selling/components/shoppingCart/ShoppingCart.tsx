import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { SelectedProductType } from '../../types/Products';
import { ShoppingCartItem } from './ShoppingCartItem';
import { useMemo } from 'react';

export interface productsDisplayProps {
  selectedProducts: SelectedProductType[];
  removeProduct: (productId: number) => void;
}

export function ShoppingCart({ selectedProducts, removeProduct }: productsDisplayProps) {
  const totalPrice = useMemo(() => {
    return selectedProducts.reduce((acc, product) => {
      return acc + product.price;
    }, 0);
  }, [selectedProducts]);

  return (
    <Container>
      <Row className="mt-3 justify-content-between align-items-start">
        <Col md={ 7 } className="white-container p-3 rounded shadow">
          <h4>Carrinho</h4>
          <div className="px-3 mb-2">
            <Row className="justify-content-between mb-2">
              <Col md={ 4 }><span>Produto</span></Col>
              <Col md={ 3 }><span>Quantidade</span></Col>
              <Col md={ 3 }><span>Preço</span></Col>
              <Col md={ 2 } />
            </Row>
          </div>
          <ListGroup as="ul">
            {
              selectedProducts.map((product) => {
                return <ShoppingCartItem
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
          <Row className="mt-2">
            <Col>
              <span className="text-secondary">Preço Total:</span>
            </Col>
            <Col>
              <span className="fw-bold"> R$ { totalPrice } </span>
            </Col>
          </Row>
          <Row>
            <hr className="mx-2 size w-75"/>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

