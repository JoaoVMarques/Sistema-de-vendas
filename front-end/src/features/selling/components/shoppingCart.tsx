import { Container, ListGroup } from 'react-bootstrap';
import { ProductType } from '../types/products';

export interface productsDisplayProps {
  selectedProducts: ProductType[];
}

export function ShoppingCart({ selectedProducts }: productsDisplayProps) {
  return (
    <Container className="mt-4">
      <h4>Carrinho</h4>
      <ListGroup as="ul">
        {
          selectedProducts.map((product) => {
            return <ListGroup.Item as="li" variant="primary" key={ product.id } action>
              { product.name }
            </ListGroup.Item>;
          })
        }
      </ListGroup>
    </Container>
  );
}

