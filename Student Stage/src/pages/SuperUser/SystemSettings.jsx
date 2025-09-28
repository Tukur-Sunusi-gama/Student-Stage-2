import React from 'react';
import DashboardLayout from '../../layouts/DashboardLayout'; 

const SystemSettings = () => {
    return (
        <DashboardLayout role="Super User">
            <h1>System Settings ⚙️</h1>
            <p>Manage core application configurations and environment variables.</p>
        </DashboardLayout>
    );
};
export default SystemSettings;