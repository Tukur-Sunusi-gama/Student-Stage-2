import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import DashboardLayout from '../../layouts/DashboardLayout';

const EbookLibrary = () => {
  // Mock E-Book Data
  const ebooks = [
    { id: 1, title: "Calculus Essentials", author: "Dr. J. Smith", status: "New" },
    { id: 2, title: "Modern Web Dev with React", author: "A. Sharma", status: "Reading" },
    { id: 3, title: "Quantum Computing Basics", author: "P. Zuk", status: "Finished" },
  ];

  return (
    <DashboardLayout role="Student">
      <h1>E-Book Library 📚</h1>
      <p className="lead text-muted">Access all your digital academic resources here.</p>
      
      <Row className="mt-4">
        {ebooks.map((book) => (
          <Col md={4} key={book.id} className="mb-4">
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">by {book.author}</Card.Subtitle>
                <p>Status: <span className={`fw-bold text-${book.status === 'New' ? 'info' : book.status === 'Reading' ? 'warning' : 'success'}`}>{book.status}</span></p>
                <Button variant="primary" className="w-100">
                  {book.status === 'Reading' ? 'Continue Reading' : 'Start Reading'}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
      {/* Search/Filter section placeholder */}
      <Card className="mt-3 p-3">
        <Form.Control type="text" placeholder="Search for titles, authors, or subjects..." />
      </Card>

    </DashboardLayout>
  );
};

export default EbookLibrary;