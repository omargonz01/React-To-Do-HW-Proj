import { Navbar, Nav } from 'react-bootstrap';
import { BiLogoReact } from 'react-icons/bi';
import './Nav.css'

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#"><BiLogoReact size={32} /> DoDiligance - List Manager</Navbar.Brand>
      <Navbar.Toggle  />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Lists</Nav.Link>
          <Nav.Link href="#">Profile</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
