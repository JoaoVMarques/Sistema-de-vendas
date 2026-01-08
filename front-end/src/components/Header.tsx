import { Container, Row } from 'react-bootstrap';
import '../styles/styles.css';
import { House, Cart, CartFill } from 'react-bootstrap-icons';

interface productsDisplayProps {
  SelectedPage: string
}

export function Header({ SelectedPage }: productsDisplayProps) {
  return (
    <div className="header">
      <Container className="ms-3">
        <Row className="mt-4">
          <h4>
            Marques-Sales
          </h4>
        </Row>
        <Row className="mt-3">
          <span><House className="header-icon" size={ 20 } /> Home</span>
        </Row>
        <Row className="mt-3">

          { (() => {
            if (SelectedPage !== 'cart') {
              return <span><Cart className="header-icon" size={ 20 } /> Carrinho</span>;
            } else {
              return <span className="text-info"><CartFill
                className="header-icon text-info"
                size={ 20 } /> Carrinho</span>;
            }
          })() }
        </Row>
      </Container>
    </div>
  );
}

