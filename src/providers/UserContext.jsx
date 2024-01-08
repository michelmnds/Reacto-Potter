import { createContext, useState } from "react";

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserContextProvider = ({ children }) => {
  const [currentHouse, setCurrentHouse] = useState("");

  return (
    <UserContext.Provider value={{ currentHouse, setCurrentHouse }}>
      {children}
    </UserContext.Provider>
  );
};
