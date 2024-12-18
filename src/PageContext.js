import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Create the context
const PageContext = createContext();

// Custom hook to use the context
export const usePageContext = () => useContext(PageContext);

// Provider component
export const PageProvider = ({ children }) => {
  const [path, setPath] = useState('');
  const navigate = useNavigate();  // React Router hook to handle navigation

  // Function to set the path and navigate to it
  const navigateTo = (newPath) => {
    setPath(newPath);
    navigate(newPath);  // Trigger navigation
  };

  return (
    <PageContext.Provider value={{ path, navigateTo }}>
      {children}
    </PageContext.Provider>
  );
};
