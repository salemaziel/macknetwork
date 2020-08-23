import React, { useState } from 'react';
import { Link, navigateTo } from 'gatsby';
import {
  LANDING,
  SIGN_IN,
  SIGN_UP,
} from '../../../../constants/routes';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import SideNav from 'react-simple-sidenav';

const NavigationNonAuth = (props) => {
  const [showNav, setShowNav] = useState();

  return (
    <Navbar bg="white" variant="light" expand="lg" className="">
      <Container>
        <Nav.Item to={LANDING}>
          <Navbar.Brand as={Link} to={LANDING}>
            <img
              className="d-inline-block align-top"
              src="https://res.cloudinary.com/dexdumfqy/image/upload/v1598156762/mack.network/macknetwork-logo_hcuotz.png"
              alt="Logo"
              height="60"
            ></img>
          </Navbar.Brand>
        </Nav.Item>

        <Navbar.Toggle
          aria-controls="navbar-nav"
          className="border-0"
          onClick={() => setShowNav(true)}
        ></Navbar.Toggle>
        {/*<Navbar.Collapse
          id="navbar-nav"
          className="justify-content-end"
        >*/}
        <Navbar id="navbar-nav" className="justify-content-end NoDesktop">
          <Nav className="mr-auto">
            <Nav.Item to="/about">
              <Nav.Link as={Link} to="/about" active={false}>
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item to="/faq">
              <Nav.Link as={Link} to="/faq" active={false}>
                FAQ
              </Nav.Link>
            </Nav.Item>

            {/*<Nav.Item to="/contact">
          <Nav.Link as={Link} to="/contact" active={false}>Contact</Nav.Link>
</Nav.Item>*/}

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

          {/*</Navbar.Collapse>*/}
        </Navbar>
        <SideNav
            openFromRight={true}
            title={
              <div
                style={{
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                }}
              ></div>
            }
            titleStyle={{
              background: 'inherit',
              backgroundColor: 'transparent',
              color: 'black',
              margin: 'auto',
            }}
            items={[
              <Link rel="preload" className="" to="/">
                Home
              </Link>,
              <Link rel="preload" className="" to="/about">
                About
              </Link>,
              <Link rel="preload" className="" to="/faq">
                FAQ
              </Link>,
              <Link rel="preload" className="" to={SIGN_IN}>
                Sign In
              </Link>,
            ]}
            itemStyle={{
              background: 'transparent!important',
              backgroundColor: 'transparent!important',
              color: '#fff',
              fontSize: '2rem',
              padding: '10px 0',
              textAlign: 'center',
              margin: '1rem auto',
            }}
            navStyle={{
              width: '70%',
              background: 'rgba(255,255,255,0.9)',
              color: 'white!important',
              maxHeight: '100vh',
            }}
            showNav={showNav}
            onHideNav={() => setShowNav(false)}
          />
      </Container>
    </Navbar>
  );
};

export default NavigationNonAuth;
