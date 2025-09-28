import React from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import DashboardLayout from '../../layouts/DashboardLayout';

const ProfilePage = () => {
  return (
    <DashboardLayout role="Student">
      <h1>My Profile 👤</h1>
      <p className="lead text-muted">Manage your personal information and settings.</p>
      
      <Card className="shadow-sm mt-4">
        <Card.Header as="h5">Personal Details</Card.Header>
        <Card.Body>
          <Form>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="formFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter first name" defaultValue="Alice" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter last name" defaultValue="Smith" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" defaultValue="alice.s@example.com" disabled />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBio">
              <Form.Label>Bio</Form.Label>
              <Form.Control as="textarea" rows={3} defaultValue="Future graduate specializing in AI and Machine Learning." />
            </Form.Group>

            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </DashboardLayout>
  );
};

export default ProfilePage;