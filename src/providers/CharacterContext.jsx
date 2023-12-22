import { createContext, useEffect, useState } from "react";
import axios from "axios";
//import { HouseContext } from "../../providers/HouseContext";

export const CharactersContext = createContext();

const CharactersContextProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [needRefresh, setNeedRefresh] = useState(false);
  const [isStale, setIsStale] = useState(false);
  const [house, setHouse] = useState(""); //use the value from housecontext once available

  const fetchCharacters = async () => {
    try {
      const response = await axios.get(
        "https://hp-api.onrender.com/api/characters"
      );
      if (response.status === 200) {
        setCharacters(response.data);
        setIsLoading(false);
        setNeedRefresh(false);
        setIsStale(false);
        setTimeout(() => {
          setIsStale(true);
        }, 1000 * 60 * 5);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []); //watch house from house context

  const getOneCharacter = (characterId) => {
    const oneCharacter = characters.find(
      (character) => character.id == characterId
    );
    return oneCharacter;
  };

  const triggerRefresh = () => {
    setNeedRefresh(true);
  };

  useEffect(() => {
    if (needRefresh) {
      fetchCharacters();
    }
  }, [needRefresh]);

  useEffect(() => {
    if (location.pathname === "/characters" && isStale) {
      triggerRefresh();
    }
  }, [location]);

  return (
    <CharactersContext.Provider
      value={{
        isLoading,
        characters,
        fetchCharacters,
        getOneCharacter,
        triggerRefresh,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export default CharactersContextProvider;
