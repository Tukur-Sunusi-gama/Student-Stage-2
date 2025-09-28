import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'; // Good for linking Bootstrap Nav.Links
import { useAuth } from '../contexts/AuthContext';

// Install this package for LinkContainer if you haven't: npm install react-router-bootstrap

const NavbarComponent = () => {
  const { isLoggedIn, userRole, logout } = useAuth();
  const capLogo = '🎓'; 

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Brand/Logo */}
        <LinkContainer to="/">
          <Navbar.Brand>
            <span style={{ fontSize: '1.5rem', marginRight: '10px' }}>{capLogo}</span>
            Student Stage
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {isLoggedIn ? (
              // Show links for logged-in users
              <>
                <Navbar.Text className="me-3">
                  Signed in as: <strong className="text-info">{userRole}</strong>
                </Navbar.Text>
                
                {/* Dynamic Dashboard Link */}
                {userRole === 'Student' && <LinkContainer to="/student/dashboard"><Nav.Link>Student Dashboard</Nav.Link></LinkContainer>}
                {userRole === 'Tutor' && <LinkContainer to="/tutor/dashboard"><Nav.Link>Tutor Dashboard</Nav.Link></LinkContainer>}
                {userRole === 'Super User' && <LinkContainer to="/admin/dashboard"><Nav.Link>Admin Dashboard</Nav.Link></LinkContainer>}

                <Button variant="outline-light" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              // Show links for public users (not logged in)
              <>
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
                {/* Add Register link here once you create that page */}
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;