import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout'; 

const AdminDashboard = () => {
    return (
        <DashboardLayout role="Super User">
            <h1>Admin Dashboard 👑</h1>
            <p>System-wide metrics and status overview.</p>
        </DashboardLayout>
    );
};
export default AdminDashboard;