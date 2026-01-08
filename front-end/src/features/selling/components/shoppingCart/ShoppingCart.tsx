import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { ProductType } from '../../types/Products';
import { ShoppingCartItem } from './ShoppingCartItem';

export interface productsDisplayProps {
  selectedProducts: ProductType[];
  removeProduct: (productId: number) => void;
}

export function ShoppingCart({ selectedProducts, removeProduct }: productsDisplayProps) {
  return (
    <Container className="mt-4 white-container p-5 rounded">
      <Row>
        <Col md={ 8 }>
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
        <Col md={ 4 }>
          <h4>Visão Geral</h4>
        </Col>
      </Row>
    </Container>
  );
}

