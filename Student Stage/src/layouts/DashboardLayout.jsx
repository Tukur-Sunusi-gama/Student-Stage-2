import React, { useState } from 'react';
// 1. Import Offcanvas and Button for the mobile menu
import { Container, Row, Col, Offcanvas, Button } from 'react-bootstrap'; 
import StudentSidebar from '../components/StudentSidebar'; 
import TutorSidebar from '../components/TutorSidebar';
import AdminSidebar from '../components/AdminSidebar';

/**
 * Reusable layout for all role dashboards (Student, Tutor, Admin).
 * Uses a responsive sidebar (static on desktop, Offcanvas on mobile) and a main content area.
 * @param {string} role - The current user's role ('Student', 'Tutor', 'Super User').
 * @param {React.ReactNode} children - The content of the specific dashboard page.
 */
const DashboardLayout = ({ role, children }) => {
  // 2. State for controlling the mobile sidebar (Offcanvas)
  const [showSidebar, setShowSidebar] = useState(false);
  const handleClose = () => setShowSidebar(false);
  // We call handleClose when a link is clicked inside the Offcanvas body
  const handleShow = () => setShowSidebar(true); 

  // Choose the correct sidebar component based on the role
  const renderSidebar = () => {
    switch (role) {
      case 'Student':
        return <StudentSidebar />;
      case 'Tutor':
        return <TutorSidebar />;
      case 'Super User':
        return <AdminSidebar />;
      default:
        return null;
    }
  };

  return (
    <Container fluid className="p-0" style={{ minHeight: '92vh' }}>
      
      {/* 3. MOBILE SIDEBAR (Offcanvas) - Visible only on small screens */}
      {/* The Offcanvas component slides out from the side on mobile */}
      <Offcanvas show={showSidebar} onHide={handleClose} responsive="md" placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className={`text-${role === 'Student' ? 'primary' : role === 'Tutor' ? 'warning' : 'danger'}`}>
            {role} Menu
          </Offcanvas.Title>
        </Offcanvas.Header>
        {/* Pass the click handler to hide the menu when a NavLink is clicked */}
        <Offcanvas.Body onClick={handleClose}>
          {renderSidebar()}
        </Offcanvas.Body>
      </Offcanvas>

      {/* 4. Main Layout Structure */}
      <Row className="g-0"> 
        
        {/* DESKTOP SIDEBAR: Hidden on screens smaller than medium (md) */}
        {/* d-none: hide on mobile, d-md-block: show on desktop */}
        <Col md={2} className="d-none d-md-block bg-light border-end p-3 shadow-sm">
          {renderSidebar()}
        </Col>
        
        {/* MAIN CONTENT AREA */}
        {/* xs=12: full width on mobile, md=10: 10 columns on desktop */}
        <Col xs={12} md={10} className="p-4">
          
          {/* MOBILE TOGGLE BUTTON: Visible only on small screens (d-md-none) */}
          <div className="d-md-none mb-3">
            <Button variant="outline-secondary" onClick={handleShow}>
              <i className="bi bi-list me-2"></i>Show Menu
            </Button>
          </div>
          
          {children} {/* Renders the actual dashboard page content */}
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardLayout;