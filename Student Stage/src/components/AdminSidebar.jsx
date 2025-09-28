import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const AdminSidebar = () => {
  return (
    <Nav className="flex-column">
      <h5 className="mb-3 text-danger">Admin Menu</h5>

      {/* 1. Dashboard */}
      <LinkContainer to="/admin/dashboard">
        <Nav.Link><i className="bi bi-speedometer2 me-2"></i>Dashboard</Nav.Link>
      </LinkContainer>

      {/* 2. User Management */}
      <LinkContainer to="/admin/user-management">
        <Nav.Link><i className="bi bi-people me-2"></i>User Management</Nav.Link>
      </LinkContainer>

      {/* 3. Course Management */}
      <LinkContainer to="/admin/course-management">
        <Nav.Link><i className="bi bi-book me-2"></i>Course Management</Nav.Link>
      </LinkContainer>

      {/* 4. System Analytics */}
      <LinkContainer to="/admin/analytics">
        <Nav.Link><i className="bi bi-bar-chart me-2"></i>System Analytics</Nav.Link>
      </LinkContainer>

      {/* 5. Permissions Control */}
      <LinkContainer to="/admin/permissions">
        <Nav.Link><i className="bi bi-shield me-2"></i>Permissions Control</Nav.Link>
      </LinkContainer>

      {/* 6. System Settings */}
      <LinkContainer to="/admin/settings">
        <Nav.Link><i className="bi bi-gear me-2"></i>System Settings</Nav.Link>
      </LinkContainer>
    </Nav>
  );
};

export default AdminSidebar;