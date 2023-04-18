import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

type Props = {
  handleSearch: () => Promise<void>;
};

const MyNavbar = ({ handleSearch }: Props) => {
  return (
    <Navbar bg="Dark" expand="lg">
      <Navbar.Brand href="#home">Mi aplicación</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#link1">Informacion</Nav.Link>
          <Nav.Link href="#link2" onClick={handleSearch}>
            Datos
          </Nav.Link>
          <NavDropdown title="Opciones desplegables" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action1">Acción 1</NavDropdown.Item>
            <NavDropdown.Item href="#action2">Acción 2</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action3">Acción 3</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
