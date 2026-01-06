import { ListGroup } from 'react-bootstrap';
import { ProductType } from '../../types/products';

export interface productsDisplayProps {
  products: ProductType[];
  onSelect: (product: ProductType) => void
}

function ProductsDisplay({ products, onSelect }: productsDisplayProps) {
  return (
    <>
      <ListGroup as="ul">
        {
          products.map((product) => {
            return <ListGroup.Item 
              as="li"
              action
              onClick={() => onSelect(product)} key={product.id}>
              {product.name}
            </ListGroup.Item>;
          })
        }
      </ListGroup>
    </>
  );
}

export default ProductsDisplay;
