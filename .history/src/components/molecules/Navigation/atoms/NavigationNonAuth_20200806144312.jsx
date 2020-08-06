import React from 'react';
import { Link } from 'gatsby';
import { LANDING, SIGN_IN, SIGN_UP } from '../../../../constants/routes';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavigationNonAuth = () => (
  <Navbar bg={props.bg} variant={props.variant} expand={props.expand} className={props.className}>
  <Container>
    <Nav.Item to={LANDING}>
      <Navbar.Brand>
        <img
          className="d-inline-block align-top"
          src={props.logo}
          alt="Logo"
          height="30"
        ></img>
      </Navbar.Brand>
    </Nav.Item>

    <Navbar.Toggle
      aria-controls="navbar-nav"
      className="border-0"
    ></Navbar.Toggle>
    <Navbar.Collapse id="navbar-nav" className="justify-content-end">
      <Nav className="mr-auto">
        <Nav.Item to="/about">
          <Nav.Link active={false}>What is Delta 8</Nav.Link>
        </Nav.Item>

        <Nav.Item to="/pricing">
          <Nav.Link active={false}>Delta 8 Pricing</Nav.Link>
        </Nav.Item>

        <Nav.Item to="/faq">
          <Nav.Link active={false}>Delta 8 Boxes</Nav.Link>
        </Nav.Item>

        <Nav.Item to="/#">
          <Nav.Link active={false}>All Delta 8 Products</Nav.Link>
        </Nav.Item>

        <Nav.Item to="/contact">
          <Nav.Link active={false}>Wholesale</Nav.Link>
        </Nav.Item>


        {/*<Nav.Dropdown id="dropdown" title="More">
          <Nav.Item to="/affiliates">
            <Nav.Dropdown.Item active={false}>Affiliates</Nav.Dropdown.Item>
          </Nav.Item>

          <Nav.Item to="/wholesale">
            <Nav.Dropdown.Item active={false}>Wholesale</Nav.Dropdown.Item>
          </Nav.Item>

          <Nav.Dropdown.Item
            href="https://medium.com"
            target="_blank"
            active={false}
          >
            Blog
          </Nav.Dropdown.Item>
        </Nav.Dropdown>*/}
      </Nav>
      <Nav className="mr-1">
        {/*{auth.user && (
          <Nav.Dropdown id="dropdown" title="Account" alignRight={true}>
            <Nav.Item to="/dashboard">
              <Nav.Dropdown.Item active={false}>Dashboard</Nav.Dropdown.Item>
            </Nav.Item>

            <Nav.Item to="/settings/general">
              <Nav.Dropdown.Item active={false}>Settings</Nav.Dropdown.Item>
            </Nav.Item>


            <Nav.Item to="/auth/signout">
              <Nav.Dropdown.Item
                active={false}
                onClick={(e) => {
                  e.preventDefault();
                  auth.signout();
                }}
              >
                Sign out
              </Nav.Dropdown.Item>
            </Nav.Item>
          </Nav.Dropdown>
        )}

        {!auth.user && (
          <Nav.Item to={SIGN_IN}>
            <Nav.Link active={false}>Login</Nav.Link>
          </Nav.Item>
        )}*/}
      </Nav>

      {/*{!auth.user && (
        <Button
          className={navStyles.SignupButton}
          variant="success"
          onClick={() => {
            navigateTo(SIGN_UP);
          }}
        >
          Sign Up
        </Button>
        )}*/}
    </Navbar.Collapse>
  </Container>
</Navbar>

);

export default NavigationNonAuth;
