import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import DashboardLayout from '../../layouts/DashboardLayout';

const SubmitQuestion = () => {
  return (
    <DashboardLayout role="Student">
      <h1>Submit a Question ❓</h1>
      <p className="lead text-muted">Get help from a tutor or the community.</p>
      
      <Card className="shadow-sm mt-4">
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="questionTitle">
              <Form.Label>Title/Subject</Form.Label>
              <Form.Control type="text" placeholder="e.g., Error in Python loop syntax" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="questionCourse">
              <Form.Label>Related Course/Topic</Form.Label>
              <Form.Select>
                <option>Select a Course</option>
                <option>Math 101: Calculus</option>
                <option>CS 205: Data Structures</option>
                <option>Physics 301: Quantum Mechanics</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-4" controlId="questionDetails">
              <Form.Label>Detailed Question</Form.Label>
              <Form.Control as="textarea" rows={6} placeholder="Describe your problem in detail, including code snippets or steps taken." />
            </Form.Group>

            <Button variant="success" type="submit">
              Submit Question
            </Button>
            <Button variant="outline-secondary" className="ms-2">
              Cancel
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </DashboardLayout>
  );
};

export default SubmitQuestion;