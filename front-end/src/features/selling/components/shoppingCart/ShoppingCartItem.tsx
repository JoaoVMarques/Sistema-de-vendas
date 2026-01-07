import { ListGroup } from 'react-bootstrap';
import { ProductType } from '../../types/products';

export interface productsDisplayProps {
  product: ProductType;
}

export function ShoppingCartItem({ product }: productsDisplayProps) {
  return (
    <ListGroup.Item as="li" variant="primary" action>
      { product.name }
    </ListGroup.Item>
  );
}

