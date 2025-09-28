import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout'; 

const PermissionsControl = () => {
    return (
        <DashboardLayout role="Super User">
            <h1>Permissions Control 🔑</h1>
            <p>Manage access levels and permissions for all users.</p>
        </DashboardLayout>
    );
};
export default PermissionsControl;