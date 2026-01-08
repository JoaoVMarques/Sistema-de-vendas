import { Container, ListGroup } from 'react-bootstrap';
import { ProductType } from '../../types/Products';
import { ShoppingCartItem } from './ShoppingCartItem';

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
            return <ShoppingCartItem product={ product } key={ product.id } />;
          })
        }
      </ListGroup>
    </Container>
  );
}

