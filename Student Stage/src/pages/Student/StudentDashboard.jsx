import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
// 1. IMPORT THE LAYOUT COMPONENT
import DashboardLayout from '../../layouts/DashboardLayout'; 
// 2. You don't need useAuth here, as the ProtectedRoute handles access.
// import { useAuth } from '../../contexts/AuthContext'; 

const StudentDashboard = () => {
    // Note: The DashboardLayout component provides the main <Container> and spacing.
    // We only need the inner content here.

    return (
        // 3. WRAP THE ENTIRE PAGE CONTENT WITH THE LAYOUT
        // Pass the role so the layout knows which sidebar to render
        <DashboardLayout role="Student"> 
            
            {/* The main dashboard content starts here */}
            <h1 className="mb-4">Student Dashboard 🎓</h1>
            <p className="text-muted mb-4">
                Welcome to your student dashboard! Here you can manage your courses, assignments, and more.
            </p>

            {/* --- TOP ROW: Key Actions --- */}
            <Row>
                <Col md={4} className="mb-4">
                    <Card className="h-100 shadow-sm border-0">
                        <Card.Body className="text-center">
                            <Card.Title>📚 My Courses</Card.Title>
                            <Card.Text>
                                View and manage your enrolled courses
                            </Card.Text>
                            <Button variant="primary" href="#/student/courses">View Courses</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4">
                    <Card className="h-100 shadow-sm border-0">
                        <Card.Body className="text-center">
                            <Card.Title>📝 Assignments</Card.Title>
                            <Card.Text>
                                Check your assignments and submit work
                            </Card.Text>
                            <Button variant="success" href="#/student/assignments">View Assignments</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4} className="mb-4">
                    <Card className="h-100 shadow-sm border-0">
                        <Card.Body className="text-center">
                            <Card.Title>📊 Grades</Card.Title>
                            <Card.Text>
                                View your grades and progress reports
                            </Card.Text>
                            <Button variant="info" href="#/student/grades">View Grades</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* --- END TOP ROW --- */}

            {/* --- BOTTOM ROW: Announcements & Messages --- */}
            <Row>
                <Col md={6} className="mb-4">
                    <Card className="shadow-sm border-0">
                        <Card.Body>
                            <Card.Title>🔔 Recent Announcements</Card.Title>
                            <Card.Text className="text-muted">
                                Stay updated with the latest announcements from your tutors and administrators.
                            </Card.Text>
                            <Button variant="outline-primary" href="#/student/notifications">View All Announcements</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} className="mb-4">
                    <Card className="shadow-sm border-0">
                        <Card.Body>
                            <Card.Title>💬 Messages</Card.Title>
                            <Card.Text className="text-muted">
                                Check messages from your tutors and classmates.
                            </Card.Text>
                            <Button variant="outline-secondary" href="#/student/messages">View Messages</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* --- END BOTTOM ROW --- */}

        </DashboardLayout>
    );
};

export default StudentDashboard;