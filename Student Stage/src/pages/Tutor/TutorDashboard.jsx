import React from 'react';
import { Card, Row, Col, ListGroup } from 'react-bootstrap';
import DashboardLayout from '../../layouts/DashboardLayout';

const TutorDashboard = () => {
    // Mock data for key Tutor metrics
    const metrics = [
        { title: 'Questions Pending', value: 7, variant: 'warning', icon: 'bi-question-circle' },
        { title: 'New Students', value: 2, variant: 'success', icon: 'bi-person-plus' },
        { title: 'Community Flags', value: 3, variant: 'danger', icon: 'bi-flag' },
    ];

    return (
        <DashboardLayout role="Tutor">
            <h1>Tutor Dashboard 🍎</h1>
            <p className="lead text-muted">Your hub for student support and content oversight.</p>
            
            <Row className="mt-4">
                {metrics.map((item, index) => (
                    <Col md={4} key={index} className="mb-4">
                        <Card className="shadow-sm border-0 h-100">
                            <Card.Body>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <Card.Title className="text-secondary">{item.title}</Card.Title>
                                        <Card.Text as="h2" className={`text-${item.variant}`}>{item.value}</Card.Text>
                                    </div>
                                    <i className={`bi ${item.icon}`} style={{ fontSize: '3rem', opacity: 0.2 }}></i>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Row className="mt-3">
                <Col md={6}>
                    <Card className="shadow-sm">
                        <Card.Header as="h5">Priority Questions</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item action href="#/tutor/manage-questions">
                                **Python Error:** "While loop not terminating" <span className="float-end text-warning small">3h ago</span>
                            </ListGroup.Item>
                            <ListGroup.Item action href="#/tutor/manage-questions">
                                **Calculus:** "Integration by parts formula" <span className="float-end text-secondary small">1d ago</span>
                            </ListGroup.Item>
                            <ListGroup.Item action href="#/tutor/manage-questions">
                                **History:** "Dates for WWI timeline" <span className="float-end text-danger small">10min ago</span>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                
                <Col md={6}>
                    <Card className="shadow-sm">
                        <Card.Header as="h5">Recent Activity Feed</Card.Header>
                        <Card.Body className="small text-muted">
                            <p>You approved a new E-book submission: "Advanced React Hooks."</p>
                            <p>Student **Mark J.** was flagged for inappropriate community post.</p>
                            <p>You created a new content module for **CS 205**.</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </DashboardLayout>
    );
};

export default TutorDashboard;