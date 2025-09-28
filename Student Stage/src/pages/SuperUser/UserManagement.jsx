import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout'; 

const UserManagement = () => {
    return (
        <DashboardLayout role="Super User">
            <h1>User Management 👥</h1>
            <p>Add, edit, and deactivate user accounts (Students, Tutors, Admins).</p>
        </DashboardLayout>
    );
};
export default UserManagement;