import React, { createContext, useContext, useState } from 'react';

// Step 1: Create the Context
export const UserContext = createContext('');

// Step 2: Create the Provider Component
export const UserContextProvider = ({ children }) => {
    const [isLogin ,setisLogin] = useState(false);
    const [isUserLogedIn,setisUserLogedIn]=useState(false);
    const value={isLogin,setisLogin,isUserLogedIn,setisUserLogedIn} 
    
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(UserContext);
};

// we are making a custom hook which will give us the access to all State variables present in given context simply 
// we won't need to use useContext every time to asscess the state variables of given context

export default UserContext;
