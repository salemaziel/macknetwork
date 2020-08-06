import React from 'react';
import { Link } from 'gatsby';
import { LANDING, SIGN_IN, SIGN_UP } from '../../../../constants/routes';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavigationNonAuth = () => (
  <Navbar bg={props.bg} variant={props.variant} expand={props.expand} className={props.className}>
  <Container>
    <LinkContainer to={LANDING}>
      <Navbar.Brand>
        <img
          className="d-inline-block align-top"
          src={props.logo}
          alt="Logo"
          height="30"
        ></img>
      </Navbar.Brand>
    </LinkContainer>

    <Navbar.Toggle
      aria-controls="navbar-nav"
      className="border-0"
    ></Navbar.Toggle>
    <Navbar.Collapse id="navbar-nav" className="justify-content-end">
      <Nav className="mr-auto">
        <LinkContainer to="/about">
          <Nav.Link active={false}>What is Delta 8</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/pricing">
          <Nav.Link active={false}>Delta 8 Pricing</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/faq">
          <Nav.Link active={false}>Delta 8 Boxes</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/#">
          <Nav.Link active={false}>All Delta 8 Products</Nav.Link>
        </LinkContainer>

        <LinkContainer to="/contact">
          <Nav.Link active={false}>Wholesale</Nav.Link>
        </LinkContainer>


        {/*<NavDropdown id="dropdown" title="More">
          <LinkContainer to="/affiliates">
            <NavDropdown.Item active={false}>Affiliates</NavDropdown.Item>
          </LinkContainer>

          <LinkContainer to="/wholesale">
            <NavDropdown.Item active={false}>Wholesale</NavDropdown.Item>
          </LinkContainer>

          <NavDropdown.Item
            href="https://medium.com"
            target="_blank"
            active={false}
          >
            Blog
          </NavDropdown.Item>
        </NavDropdown>*/}
      </Nav>
      <Nav className="mr-1">
        {auth.user && (
          <NavDropdown id="dropdown" title="Account" alignRight={true}>
            <LinkContainer to="/dashboard">
              <NavDropdown.Item active={false}>Dashboard</NavDropdown.Item>
            </LinkContainer>

            <LinkContainer to="/settings/general">
              <NavDropdown.Item active={false}>Settings</NavDropdown.Item>
            </LinkContainer>

            <Dropdown.Divider></Dropdown.Divider>

            <LinkContainer to="/auth/signout">
              <NavDropdown.Item
                active={false}
                onClick={(e) => {
                  e.preventDefault();
                  auth.signout();
                }}
              >
                Sign out
              </NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        )}

        {!auth.user && (
          <LinkContainer to={SIGN_IN}>
            <Nav.Link active={false}>Login</Nav.Link>
          </LinkContainer>
        )}
      </Nav>

      {!auth.user && (
        <Button
          className={navStyles.SignupButton}
          variant="success"
          onClick={() => {
            navigateTo(SIGN_UP);
          }}
        >
          Sign Up
        </Button>
      )}
    </Navbar.Collapse>
  </Container>
</Navbar>

);

export default NavigationNonAuth;
