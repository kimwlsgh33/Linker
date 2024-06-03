import React, { useState, createContext, useContext } from "react";

export const UserContext = createContext(null);

export function UserContextProvider({ children }) {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider
      children={children}
      value={{
        user,
        setUser,
      }}
    />
  );
}

export function useUserContext() {
  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error("UserContext.Provider is not found");
  }
  return userContext;
}
