import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Mi aplicación</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#link1">Opción 1</Nav.Link>
          <Nav.Link href="#link2">Opción 2</Nav.Link>
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
