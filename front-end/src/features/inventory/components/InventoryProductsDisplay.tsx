import { Col, ListGroup, Row } from 'react-bootstrap';
import { useProducts } from '../../../hooks/queries/useProducts';
import { ProductDisplay } from './ProductDisplay';
import { useProductEditor } from '../hooks/useProductEditor';

export function InventoryProductsDisplay() {
  const {
    data,
    isLoading,
  } = useProducts();

  const {
    editingProductId,
    setEditingProductId,
  } = useProductEditor();

  if (isLoading) {
    return (
      <Row className="white-container p-3 rounded shadow">
        <h4>Inventario</h4>
        <h5 className="mt-4">Loading...</h5>
      </Row>
    );
  }

  return (
    <Row className="white-container p-3 rounded shadow">
      <h4>Inventario</h4>
      <ListGroup className="mb-0">
        <ListGroup.Item className="border-0 p-3 bg-transparent">
          <Row>
            <Col md={ 6 }><span className="fw-bold">Produto</span></Col>
            <Col md={ 2 } className="text-center"><span className="fw-bold">Preço</span></Col>
            <Col md={ 2 } className="text-center"><span className="fw-bold">Estoque</span></Col>
            <Col md={ 2 } className="text-end"><span className="fw-bold">Editar</span></Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
      <ListGroup as="ul">
        {
          data?.map((product) => {
            return <ProductDisplay
              setEditingId={ setEditingProductId }
              key={ product.id }
              product={ product } />;
          })
        }
      </ListGroup>
    </Row>
  );
}

