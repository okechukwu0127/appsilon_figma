import React from "react";
import { useIntl } from "react-intl";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FiMenu } from "react-icons/fi";

import Assets from "../assets/Assets";

const NavbarMenu = (props) => {
  const intl = useIntl();

  return (
    <Navbar bg="none" expand="md">
      <Container>
        <Navbar.Brand href="#home">
          <div className="flex-container  d-md-none d-xxl-none d-sm-block d-xs-block">
            <img
              alt="Logo"
              src={Assets.IMAGE.icon}
              width={18}
              className="center"
            />

            <span className="logoNameMobile">
              {intl.formatMessage({ id: "logo" })}
            </span>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle
          className="hide"
          aria-controls="basic-navbar-nav"
          //onClick={props.handleToggleSidebar(true)}
        />

        <div className="btn-toggle" onClick={props.handleToggleSidebar(true)}>
          <FiMenu />
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              className="overviewL d-sm-none d-xs-none d-md-block d-xxl-block"
              href="#overview"
            >
              {intl.formatMessage({ id: "overview" })}
            </Nav.Link>
            <Nav.Link
              className="policyL d-sm-none d-xs-none d-md-block d-xxl-block"
              href="#policy"
            >
              {intl.formatMessage({ id: "policy" })}
            </Nav.Link>

            <Nav.Link
              className="reportsL d-sm-none d-xs-none d-md-block d-xxl-block"
              href="#reports"
            >
              {intl.formatMessage({ id: "report" })}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
