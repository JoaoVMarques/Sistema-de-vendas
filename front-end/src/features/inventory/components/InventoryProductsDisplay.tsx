import { ListGroup, Row } from 'react-bootstrap';
import { useProducts } from '../../../hooks/queries/useProducts';

export function InventoryProductsDisplay() {
  const {
    data,
    isLoading,
  } = useProducts();

  if (isLoading) {
    return (
      <Row className="white-container p-3 rounded shadow">
        <h4>Inventario</h4>
        <h5 className="mt-4">Loading...</h5>
      </Row>
    );
  }

  {return (
    <Row className="white-container p-3 rounded shadow">
      <h4>Inventario</h4>
      <ListGroup as="ul">
        {
          data?.map((product) => {
            return <ListGroup.Item
              as="li"
              key={ product.id }>{ product.name }</ListGroup.Item>;
          })
        }
      </ListGroup>
    </Row>
  );}
}
