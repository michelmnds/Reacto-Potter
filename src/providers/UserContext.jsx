import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserContextProvider = ({ children }) => {
  const [currentHouse, setCurrentHouse] = useState("");

  useEffect(() => {
    const userHouse = localStorage.getItem("house");
    setCurrentHouse(JSON.parse(userHouse));
  }, []);

  return (
    <UserContext.Provider value={{ currentHouse, setCurrentHouse }}>
      {children}
    </UserContext.Provider>
  );
};
