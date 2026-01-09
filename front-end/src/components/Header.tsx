import { Container, Row } from 'react-bootstrap';
import '../styles/styles.css';
import { House,
  Cart,
  CartFill,
  Icon,
  HouseFill,
  Briefcase,
  BriefcaseFill } from 'react-bootstrap-icons';
import { NavLink } from 'react-router';

interface productsDisplayProps {
  SelectedPage: string
}

export function Header({ SelectedPage }: productsDisplayProps) {
  const headerSectionFunction = (
    headerText: string,
    sectionName: string,
    NotSelectedIcon: Icon,
    SelectedIcon: Icon,
  ) => {
    if (SelectedPage === sectionName) {
      return (
        <span className="text-info">
          <SelectedIcon className="mx-2 header-icon text-info" size={ 20 } />
          { headerText }
        </span>
      );
    }
    const path = `/${sectionName}`;
    return (
      <NavLink className="navlink-item" to={ path }>
        <NotSelectedIcon className="mx-2 header-icon" size={ 20 } />
        { headerText }
      </NavLink>
    );
  };

  return (
    <div className="header overflow-hidden">
      <Container className="ms-3">
        <Row className="mt-4">
          <h4>
            Marques-Sales
          </h4>
        </Row>
        <Row className="ms-1">
          <hr className="w-75" />
        </Row>
        <Row className="mt-3">
          { headerSectionFunction('Home', 'home', House, HouseFill) }
        </Row>
        <Row className="mt-3">
          { headerSectionFunction('Carrinho', 'cart', Cart, CartFill) }
        </Row>
        <Row className="mt-3">
          { headerSectionFunction('Inventario', 'inventory', Briefcase, BriefcaseFill) }
        </Row>
      </Container>
    </div>
  );
}

