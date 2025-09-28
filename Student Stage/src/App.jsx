import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';  
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// --- Import Public/Auth Pages ---
import NavbarComponent from './components/NavbarComponent';
import LoginPage from './pages/Auth/LoginPage';
import AccessDenied from './pages/Public/AccessDenied';
import NotFoundPage from './pages/Public/NotFoundPage';

// --- Import Student Pages ---
import StudentDashboard from './pages/Student/StudentDashboard';
import ProfilePage from './pages/Student/ProfilePage';
import SubmitQuestion from './pages/Student/SubmitQuestion';
import EbookLibrary from './pages/Student/EbookLibrary';
// Added placeholders for completeness, assuming you created them in the last step
import Community from './pages/Student/Community'; 
import NotificationsNews from './pages/Student/NotificationsNews';


// --- Import Tutor Pages ---
import TutorDashboard from './pages/Tutor/TutorDashboard';
// Placeholders for Tutor
import ManageQuestions from './pages/Tutor/ManageQuestions'; 
import CommunityModeration from './pages/Tutor/CommunityModeration';
import StudentManagement from './pages/Tutor/StudentManagement';
import EbookManager from './pages/Tutor/EbookManager';
import ContentManagement from './pages/Tutor/ContentManagement';
import VideoTutorials from './pages/Tutor/VideoTutorials';

// --- Import Super User Pages ---
import AdminDashboard from './pages/SuperUser/AdminDashboard';
// Placeholders for Admin
import PermissionsControl from './pages/SuperUser/PermissionsControl';
import SystemSettings from './pages/SuperUser/SystemSettings';
import UserManagement from './pages/SuperUser/UserManagement';
import LogsReports from './pages/SuperUser/LogsReports';

function App() {
    return (
        <AuthProvider> 
            <Router>
                <NavbarComponent /> 
                
                <Routes>
                    {/* --- A. ESSENTIAL PUBLIC & AUTH PAGES --- */}
                    <Route path="/" element={<h1>Welcome Home!</h1>} /> 
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/access-denied" element={<AccessDenied />} />
                    
                    {/* --- B. PROTECTED ROUTES --- */}
                    
                    {/* Student Routes */}
                    <Route element={<ProtectedRoute allowedRoles={['Student']} />}>
                        <Route path="/student/dashboard" element={<StudentDashboard />} />
                        <Route path="/student/profile" element={<ProfilePage />} />
                        <Route path="/student/submit-question" element={<SubmitQuestion />} />
                        <Route path="/student/ebook-library" element={<EbookLibrary />} />
                        <Route path="/student/community" element={<Community />} />
                        <Route path="/student/notifications" element={<NotificationsNews />} />
                        <Route path="/student/ai-assistance" element={<h1>AI Assistance Placeholder</h1>} />
                    </Route>

                    {/* Tutor Routes */}
                    <Route element={<ProtectedRoute allowedRoles={['Tutor']} />}>
                        <Route path="/tutor/dashboard" element={<TutorDashboard />} />
                        <Route path="/tutor/manage-questions" element={<ManageQuestions />} />
                        <Route path="/tutor/community-moderation" element={<CommunityModeration />} />
                        <Route path="/tutor/student-management" element={<StudentManagement />} />
                        <Route path="/tutor/ebook-manager" element={<EbookManager />} />
                        <Route path="/tutor/content-management" element={<ContentManagement />} />
                        <Route path="/tutor/video-tutorials" element={<VideoTutorials />} />
                    </Route>

                    {/* Super User Routes (Admin) */}
                    <Route element={<ProtectedRoute allowedRoles={['Super User']} />}>
                        <Route path="/admin/dashboard" element={<AdminDashboard />} />
                        <Route path="/admin/permissions-control" element={<PermissionsControl />} />
                        <Route path="/admin/system-settings" element={<SystemSettings />} />
                        <Route path="/admin/user-management" element={<UserManagement />} />
                        <Route path="/admin/logs-reports" element={<LogsReports />} />
                    </Route>

                    {/* Catch-all route for 404 Not Found */}
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;