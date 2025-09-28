import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

/**
 * A component to protect routes based on the user's role.
 * @param {object} props - Component props.
 * @param {string[]} props.allowedRoles - An array of roles ('Student', 'Tutor', 'Super User') that can access this route.
 */
const ProtectedRoute = ({ allowedRoles }) => {
  const { isLoggedIn, userRole } = useAuth();

  // 1. Check if the user is logged in
  if (!isLoggedIn) {
    // Not logged in, redirect to the login page
    return <Navigate to="/login" replace />;
  }

  // 2. Check if the user has one of the allowed roles
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    // Logged in, but wrong role, redirect to Access Denied page
    return <Navigate to="/access-denied" replace />;
  }

  // 3. User is logged in and has the correct role, render the child route
  return <Outlet />;
};

export default ProtectedRoute;