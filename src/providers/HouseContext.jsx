import { createContext, useEffect, useState, useContext } from "react";
import { UserContext } from "./UserContext";
import axios from "axios";

export const HouseContext = createContext();

// eslint-disable-next-line react/prop-types
export const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState([]);
  const { setCurrentHouse } = useContext(UserContext);

  const updateCurrentHouse = (e) => {
    setCurrentHouse(e.target.alt);
  };

  const handleClick = (e) => {
    const house = e.target.alt;
    localStorage.setItem("house", JSON.stringify(house));
    updateCurrentHouse(e);
  };

  useEffect(() => {
    const getAllHouses = async () => {
      try {
        const response = await axios.get(
          "https://json-server-hphouses.adaptable.app/houses"
        );
        setHouses(response.data);
      } catch (error) {
        console.error("Error fetching houses:", error);
      }
    };
    getAllHouses();
  }, []);

  const createHouse = async (data) => {
    try {
      const response = await axios.post(
        "https://json-server-hphouses.adaptable.app/houses",
        data
      );

      const newHouse = response.data;

      setHouses([...houses, newHouse]);
    } catch (error) {
      console.log(error);
    }
  };

  const editHouse = async (data, houseId) => {
    try {
      const response = await axios.patch(
        `https://json-server-hphouses.adaptable.app/houses/${houseId}`,
        data
      );

      const updatedHouse = response.data;

      setHouses((prevHouses) =>
        prevHouses.map((house) =>
          house.id === houseId ? { ...house, ...updatedHouse } : house
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHouse = async (houseId) => {
    try {
      await axios.delete(
        `https://json-server-hphouses.adaptable.app/houses/${houseId}`
      );

      setHouses(houses.filter((house) => house.id !== houseId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HouseContext.Provider
      value={{ handleClick, createHouse, editHouse, deleteHouse, houses }}
    >
      {children}
    </HouseContext.Provider>
  );
};
