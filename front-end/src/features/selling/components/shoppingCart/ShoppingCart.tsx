import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { ProductType } from '../../types/Products';
import { ShoppingCartItem } from './ShoppingCartItem';

export interface productsDisplayProps {
  selectedProducts: ProductType[];
  removeProduct: (productId: number) => void;
}

export function ShoppingCart({ selectedProducts, removeProduct }: productsDisplayProps) {
  return (
    <Container>
      <Row className="mt-3 justify-content-between">
        <Col md={ 7 } className="white-container p-3 rounded">
          <h4>Carrinho</h4>
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
        <Col md={ 4 } className="white-container p-3 rounded">
          <h4>Visão Geral</h4>
        </Col>
      </Row>
    </Container>
  );
}

