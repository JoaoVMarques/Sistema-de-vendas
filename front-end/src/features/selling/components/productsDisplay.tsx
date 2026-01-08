import { Container, ListGroup } from 'react-bootstrap';
import { ProductType } from '../types/Products';
import '../../../styles/styles.css';
import { useEffect, useRef } from 'react';

interface productsDisplayProps {
  products: ProductType[];
  onSelect: (product: ProductType) => void;
  highlightedIndex: number;
  setHighlightedIndex: (index: number) => void;
}

export function ProductsDisplay({ products,
  onSelect,
  highlightedIndex,
  setHighlightedIndex }: productsDisplayProps) {
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
              onMouseEnter={ () => setHighlightedIndex(index) }
              onClick={ () => onSelect(product) }
              key={ product.id }
              ref={ index === highlightedIndex && index >= 0 ? activeItemRef : null }
            >
              { product.name }
            </ListGroup.Item>;

          })
        }
      </ListGroup>
    </Container>
  );
}
