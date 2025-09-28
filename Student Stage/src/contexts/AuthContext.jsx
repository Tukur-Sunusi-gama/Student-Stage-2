import React, { createContext, useState, useContext, useEffect } from 'react';

// 1. Create the Context
const AuthContext = createContext(null);

// 2. Auth Provider Component
export const AuthProvider = ({ children }) => {
  // Use localStorage to persist the state across page refreshes
  const [userRole, setUserRole] = useState(() => localStorage.getItem('userRole') || null);
  const [isLoggedIn, setIsLoggedIn] = useState(!!userRole);

  useEffect(() => {
    // This ensures isLoggedIn is always in sync with userRole (i.e., local storage)
    setIsLoggedIn(!!userRole);
    if (userRole) {
      localStorage.setItem('userRole', userRole);
    } else {
      localStorage.removeItem('userRole');
    }
  }, [userRole]);

  // Function to simulate a successful login
  const login = (role) => {
    if (['Student', 'Tutor', 'Super User'].includes(role)) {
      setUserRole(role); // This will trigger the useEffect to set isLoggedIn and localStorage
      console.log(`User logged in as: ${role}`);
      return true;
    }
    return false;
  };

  // Function to simulate logout
  const logout = () => {
    setUserRole(null); // This will trigger the useEffect to clear isLoggedIn and localStorage
    console.log('User logged out.');
  };

  return (
    <AuthContext.Provider value={{ userRole, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Custom Hook to easily use the context
// This is the core fix: useContext is now properly imported from React at the top.
export const useAuth = () => {
  return useContext(AuthContext);
};