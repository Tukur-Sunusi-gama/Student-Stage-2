import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <h1 className="display-1">404</h1>
      <h2 className="mb-4">Page Not Found</h2>
      <p className="text-muted mb-4">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <Button variant="primary" size="lg">
          Go Home
        </Button>
      </Link>
    </Container>
  );
};

export default NotFoundPage;