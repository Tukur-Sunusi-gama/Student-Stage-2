import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const StudentSidebar = () => {
  return (
    <Nav className="flex-column">
      <h5 className="mb-3 text-primary">Student Menu</h5>
      
      {/* 1. Dashboard */}
      <LinkContainer to="/student/dashboard">
        <Nav.Link><i className="bi bi-speedometer2 me-2"></i>Dashboard</Nav.Link>
      </LinkContainer>
      
      {/* 2. Profile Page (Path updated) */}
      <LinkContainer to="/student/profile">
        <Nav.Link><i className="bi bi-person me-2"></i>Profile Page</Nav.Link>
      </LinkContainer>

      {/* 3. Submit a Question (Path updated) */}
      <LinkContainer to="/student/submit-question">
        <Nav.Link><i className="bi bi-question-square me-2"></i>Submit a Question</Nav.Link>
      </LinkContainer>
      
      {/* 4. AI Assistance (Using placeholder route from App.jsx) */}
      <LinkContainer to="/student/ai-assistance">
        <Nav.Link><i className="bi bi-robot me-2"></i>AI Assistance</Nav.Link>
      </LinkContainer>

      {/* 5. Community (Using placeholder route from App.jsx) */}
      <LinkContainer to="/student/community">
        <Nav.Link><i className="bi bi-people me-2"></i>Community</Nav.Link>
      </LinkContainer>

      {/* 6. Notifications / News (Using placeholder route from App.jsx) */}
      <LinkContainer to="/student/notifications">
        <Nav.Link><i className="bi bi-bell me-2"></i>Notifications / News</Nav.Link>
      </LinkContainer>
      
      {/* 7. E-Book Library (Path updated) */}
      <LinkContainer to="/student/ebook-library">
        <Nav.Link><i className="bi bi-book me-2"></i>E-Book Library</Nav.Link>
      </LinkContainer>
    </Nav>
  );
};

export default StudentSidebar;

// NOTE: You'll need to install Bootstrap Icons for the icons to show: npm install bootstrap-icons