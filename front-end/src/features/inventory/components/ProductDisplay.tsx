import { ListGroup } from 'react-bootstrap';
import { ProductType } from '../../selling/types/Products';

interface productDisplayProps {
  product: ProductType
}

export function ProductDisplay({ product }: productDisplayProps) {
  return (
    <ListGroup.Item as="li">
      { product.name }
    </ListGroup.Item>
  );
}
