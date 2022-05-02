import React from "react";
import { useIntl } from "react-intl";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavbarMenu = () => {
  const intl = useIntl();

  return (
    <Navbar bg="none" expand="lg">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="overviewL" href="#overview">
              {intl.formatMessage({ id: "overview" })}
            </Nav.Link>
            <Nav.Link className="policyL" href="#policy">
              {intl.formatMessage({ id: "policy" })}
            </Nav.Link>

            <Nav.Link className="reportsL" href="#reports">
              {intl.formatMessage({ id: "report" })}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
