import { Container, ListGroup } from 'react-bootstrap';
import { ProductType } from '../../types/Products';
import { ShoppingCartItem } from './ShoppingCartItem';

export interface productsDisplayProps {
  selectedProducts: ProductType[];
  removeProduct: (productId: number) => void;
}

export function ShoppingCart({ selectedProducts, removeProduct }: productsDisplayProps) {
  return (
    <Container className="mt-4">
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
    </Container>
  );
}

