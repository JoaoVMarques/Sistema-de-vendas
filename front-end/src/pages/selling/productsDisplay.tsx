import { ListGroup } from 'react-bootstrap';
import { ProductType } from '../../types/products';

export interface productsDisplayProps {
  searchResults: ProductType[];
}

function ProductsDisplay({ searchResults }: productsDisplayProps) {
  return (
    <>
      <ListGroup as="ul">
        {
          searchResults.map((result) => {
            return <ListGroup.Item 
              as="li" 
              action 
              onClick={() => console.log(result.name)} key={result.id}>
              {result.name}
            </ListGroup.Item>;
          })
        }
      </ListGroup>
    </>
  );
}

export default ProductsDisplay;
