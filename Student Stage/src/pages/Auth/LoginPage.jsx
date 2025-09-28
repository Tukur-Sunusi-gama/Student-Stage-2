import React, { useState } from 'react';
import { Button, Form, Container, Card } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [inputRole, setInputRole] = useState('Student'); // Default for testing

  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(inputRole); // Attempt to log in with the selected role

    if (success) {
      // Redirect based on the logged-in role
      if (inputRole === 'Student') navigate('/student/dashboard');
      else if (inputRole === 'Tutor') navigate('/tutor/dashboard');
      else if (inputRole === 'Super User') navigate('/admin/dashboard');
    } else {
      alert('Login failed. Please select a valid role.');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <Card style={{ width: '25rem' }} className="p-4 shadow">
        <h2 className="text-center mb-4">Login to Student Stage 🎓</h2>
        <Form onSubmit={handleLogin}>
          {/* In a real app, this would be Username/Password fields */}
          <Form.Group className="mb-3">
            <Form.Label>Select Role (for testing)</Form.Label>
            <Form.Select 
              value={inputRole} 
              onChange={(e) => setInputRole(e.target.value)}
            >
              <option value="Student">Student</option>
              <option value="Tutor">Tutor</option>
              <option value="Super User">Super User</option>
            </Form.Select>
          </Form.Group>
          <Button type="submit" className="w-100 mt-3" variant="primary">
            Log In
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default LoginPage;