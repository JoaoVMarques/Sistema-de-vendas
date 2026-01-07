import { Container, ListGroup } from 'react-bootstrap';
import { ProductType } from '../types/products';
import '../../../styles/styles.css';
import { useEffect, useRef } from 'react';

interface productsDisplayProps {
  products: ProductType[];
  onSelect: (product: ProductType) => void;
  highlightedIndex: number;
}

export function ProductsDisplay({ products, onSelect, highlightedIndex }: productsDisplayProps) {
  const activeItemRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    activeItemRef.current?.scrollIntoView({
      block: 'nearest',
      behavior: 'smooth',
    });
  }, [highlightedIndex]);

  return (
    <Container>
      <ListGroup as="ul" className="products-list">
        {
          products.map((product, index) => {
            return <ListGroup.Item
              as="li"
              action
              className="cursor-pointer"
              active={ highlightedIndex === index }
              onClick={ () => onSelect(product) }
              key={ product.id }
              ref={ index === highlightedIndex ? activeItemRef : null }>
              { product.name }
            </ListGroup.Item>;
          })
        }
      </ListGroup>
    </Container>
  );
}
