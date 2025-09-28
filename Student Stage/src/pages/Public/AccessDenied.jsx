import React from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AccessDenied = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <Card className="text-center p-5 shadow" style={{ maxWidth: '500px' }}>
        <Card.Body>
          <h1 className="display-1 text-danger">🚫</h1>
          <h2 className="mb-4">Access Denied</h2>
          <p className="text-muted mb-4">
            You don't have permission to access this page. Please log in with the appropriate role or contact an administrator.
          </p>
          <div className="d-flex gap-2 justify-content-center">
            <Link to="/login">
              <Button variant="primary">
                Go to Login
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline-secondary">
                Go Home
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AccessDenied;