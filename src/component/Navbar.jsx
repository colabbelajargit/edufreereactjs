import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { BoxArrowUpRight } from "react-bootstrap-icons";
import "../style/navbar.css";

function NavbarSipenting() {
  return (
    <Navbar expand="lg" fixed="top" className="nav shadow-sm ">
      <Container>
        <Navbar.Brand href="#logo">
          <h4 className="navbarcol">[EDUFREE]</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="reponsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav-item navbar-nav ms-auto justify-content-end flex-grow-1 pe-3">
            <Nav.Link to="/" className="nav-link active pe-5" aria-current="page" style={{ color: "white", fontWeight: "bold" }}>
              HOME
            </Nav.Link>
            <Nav.Link to="/" className="nav-link pe-5 navbarcol">
              TENTANG KAMI
            </Nav.Link>
            <Nav.Link to="/" className="nav-link pe-5  navbarcol">
              KURSUS
            </Nav.Link>
            <Nav.Link to="/" className="nav-link pe-5  navbarcol">
              FAQ
            </Nav.Link>
            <Nav.Link to="/" className="nav-link pe-5  navbarcol" style={{ display: "flex", alignItems: "center" }}>
              BLOG <BoxArrowUpRight style={{ marginRight: "5px" }} />
            </Nav.Link>
            <button type="button" class="btn btn-outline-warning px-3">
              Login
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSipenting;
