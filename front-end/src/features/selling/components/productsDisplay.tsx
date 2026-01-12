import { Container, ListGroup } from 'react-bootstrap';
import '../../../styles/styles.css';
import { useEffect, useRef } from 'react';
import { ProductType } from '../types/Products';

interface productsDisplayProps {
  onSelect: (productId: number) => void;
  searchedProducts: ProductType[] | undefined
  highlightedIndex: number;
  searchBarInput: string;
  setHighlightedIndex: (index: number) => void;
  onSearch: () => void;
}

export function ProductsDisplay({
  searchBarInput,
  searchedProducts,
  onSearch,
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

  if (!searchedProducts) {
    return;
  } else if (searchBarInput) {
    return (
      <Container>
        <ListGroup as="ul" className="products-list">
          {
            searchedProducts?.map((product, index) => {
              return <ListGroup.Item
                as="li"
                action
                className="cursor-pointer"
                active={ highlightedIndex === index }
                onMouseEnter={ () => setHighlightedIndex(index) }
                onClick={ () => { onSelect(product.id); onSearch(); } }
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
