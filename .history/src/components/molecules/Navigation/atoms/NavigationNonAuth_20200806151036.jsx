import React from 'react';
import { Link, navigateTo } from 'gatsby';
import { LANDING, SIGN_IN, SIGN_UP } from '../../../../constants/routes';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'


const NavigationNonAuth = () => (
  <Navbar bg="white" variant="light" expand="lg" className="">
  <Container>
    <Nav.Item to={LANDING}>
      <Navbar.Brand>
        <img
          className="d-inline-block align-top"
          src=""
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
          <Nav.Link as={Link} to="/about" active={false}>About</Nav.Link>
        </Nav.Item>

        <Nav.Item to="/faq">
          <Nav.Link as={Link} to="/faq" active={false}>FAQ</Nav.Link>
        </Nav.Item>

        <Nav.Item to="/contact">
          <Nav.Link as={Link} to="/contact" active={false}>Contact</Nav.Link>
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
        <Button 
          variant="success"
          onClick={() => {
            navigateTo(SIGN_IN);
          }}
        ></Button>
    </Navbar.Collapse>
  </Container>
</Navbar>

);

export default NavigationNonAuth;
