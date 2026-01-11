import { Container, ListGroup } from 'react-bootstrap';
import '../../../styles/styles.css';
import { useEffect, useRef } from 'react';
import { useProducts } from '../../../hooks/queries/useProducts';

interface productsDisplayProps {
  onSelect: (productId: number) => void;
  highlightedIndex: number;
  searchBarInput: string;
  setHighlightedIndex: (index: number) => void;
}

export function ProductsDisplay({ searchBarInput,
  onSelect,
  highlightedIndex,
  setHighlightedIndex }: productsDisplayProps) {

  const activeItemRef = useRef<HTMLLIElement | null>(null);
  const {
    data: products,
    isLoading,
  } = useProducts();

  useEffect(() => {
    activeItemRef.current?.scrollIntoView({
      block: 'nearest',
      behavior: 'smooth',
    });
  }, [highlightedIndex]);

  if (isLoading && searchBarInput) {
    return <Container>
      <h1>Loading</h1>
    </Container>;
  } else if (searchBarInput) {
    return (
      <Container>
        <ListGroup as="ul" className="products-list">
          {
            products?.map((product, index) => {
              return <ListGroup.Item
                as="li"
                action
                className="cursor-pointer"
                active={ highlightedIndex === index }
                onMouseEnter={ () => setHighlightedIndex(index) }
                onClick={ () => onSelect(product.id) }
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
}
