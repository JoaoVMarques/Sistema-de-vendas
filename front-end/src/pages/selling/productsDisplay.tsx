import { ListGroup } from 'react-bootstrap';
import { ProductType } from '../../types/products';

export interface productsDisplayProps {
  searchResults: ProductType[];
}

function ProductsDisplay({ searchResults }: productsDisplayProps) {

  console.log(searchResults);

  return (
    <>
      <ListGroup as="ul">
        {
          searchResults.map((result, id) => {
            return <ListGroup.Item as="li" key={id}>
              {result.name}
            </ListGroup.Item>;
          })
        }
      </ListGroup>
    </>
  );
}

export default ProductsDisplay;
