import React, { createContext, useContext, useState } from "react";

// Create context
const UserContext = createContext(null);

// Context provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // user = { userId, username }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for consuming context
export const useUser = () => useContext(UserContext);