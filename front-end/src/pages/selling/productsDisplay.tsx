import { ListGroup } from 'react-bootstrap';
import { ProductType } from '../../types/products';

export interface productsDisplayProps {
  products: ProductType[];
  onSelect: (product: ProductType) => void;
  highlightedIndex: number;
}

function ProductsDisplay({ products, onSelect, highlightedIndex }: productsDisplayProps) {
  return (
    <>
      <ListGroup as="ul">
        {
          products.map((product, index) => {
            return <ListGroup.Item 
              as="li"
              action
              active={ highlightedIndex === index }
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
