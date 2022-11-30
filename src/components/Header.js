import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
// import { useAuthContext } from "../hooks/useAuthContext";
// import { useLogout } from "../hooks/useLogout";

function Header() {
  // const { logout } = useLogout();
  // const { user } = useAuthContext();

  // const logoutHandler = () => {
  //   logout();
  // };

  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Bourbon Trail Planning</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Results">
              <Nav.Link>Results</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
