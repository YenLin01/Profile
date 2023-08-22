import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavComponent = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link className="NavD" to="/">
          首頁
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="NavD" to="/portfolio">
              作品集
            </Link>
            <Link className="NavD" to="/aboutMe">
              關於我...
            </Link>
            <Link
              className="NavD"
              to="https://drive.google.com/file/d/1GtWX_X0Q2O5djqg8tMw8nvglEgKXaMqy/view"
            >
              履歷表
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavComponent;
