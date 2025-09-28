import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const TutorSidebar = () => {
  return (
    <Nav className="flex-column">
      <h5 className="mb-3 text-warning">Tutor Menu</h5>
      
      {/* 1. Tutor Dashboard */}
      <LinkContainer to="/tutor/dashboard">
        <Nav.Link><i className="bi bi-person-workspace me-2"></i>Dashboard</Nav.Link>
      </LinkContainer>
      
      {/* 2. Manage Questions */}
      <LinkContainer to="/tutor/manage-questions">
        <Nav.Link><i className="bi bi-chat-left-dots me-2"></i>Manage Questions</Nav.Link>
      </LinkContainer>

      {/* 3. Community Moderation */}
      <LinkContainer to="/tutor/community-moderation">
        <Nav.Link><i className="bi bi-people me-2"></i>Community Moderation</Nav.Link>
      </LinkContainer>
      
      {/* 4. Student Management */}
      <LinkContainer to="/tutor/student-management">
        <Nav.Link><i className="bi bi-person-lines-fill me-2"></i>Student Management</Nav.Link>
      </LinkContainer>

      {/* 5. E-Book Manager */}
      <LinkContainer to="/tutor/ebook-manager">
        <Nav.Link><i className="bi bi-book me-2"></i>E-Book Manager</Nav.Link>
      </LinkContainer>

      {/* 6. Content Management */}
      <LinkContainer to="/tutor/content-management">
        <Nav.Link><i className="bi bi-file-earmark-text me-2"></i>Content Management</Nav.Link>
      </LinkContainer>
      
      {/* 7. Video Tutorials Page */}
      <LinkContainer to="/tutor/video-tutorials">
        <Nav.Link><i className="bi bi-camera-video me-2"></i>Video Tutorials</Nav.Link>
      </LinkContainer>
    </Nav>
  );
};

export default TutorSidebar;