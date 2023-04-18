import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

type Props = {
  handleSearch: () => Promise<void>;
  handlePersonal: () => void;
  activeTab: string;
};

const MyNavbar = ({ handleSearch, handlePersonal, activeTab }: Props) => {
  return (
    <Navbar bg="Dark" expand="lg">
      <Navbar.Brand href="#home">Mi aplicación</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" activeKey={activeTab}>
          <Nav.Link href="#home" eventKey="home">
            Inicio
          </Nav.Link>
          <Nav.Link href="#link1" eventKey="personal" onClick={handlePersonal}>
            Personal Presentation
          </Nav.Link>
          <Nav.Link href="#link2" eventKey="repositories" onClick={handleSearch}>
            Repositories
          </Nav.Link>
          <NavDropdown title="About Me" id="basic-nav-dropdown">
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
