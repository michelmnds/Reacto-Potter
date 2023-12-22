import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";

export const CharactersContext = createContext();

const CharactersContextProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [needRefresh, setNeedRefresh] = useState(false);
  const [isStale, setIsStale] = useState(false);

  const { currentHouse } = useContext(UserContext);

  const fetchCharacters = async () => {
    try {
      const response =
        currentHouse === ""
          ? await axios.get("https://hp-api.onrender.com/api/characters")
          : await axios.get(
              `https://hp-api.onrender.com/api/characters/house/${currentHouse}`
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
  }, [currentHouse]);

  const getOneCharacter = (characterId) => {
    const oneCharacter = characters.find(
      (character) => character.id == characterId
    );
    return oneCharacter;
  };

  const renderCharacters = () => {
    return characters.map((character) => (
      <li key={character.id}>
        <Link to={`/character/${character.id}`}>{character.name}</Link>
      </li>
    ));
  };

  const renderOneCharacter = () => {
    return (
      <>
        <h1>{character.name}</h1>
        <img src={character.image} alt={character.name} />
        <p>House: {character.house}</p>
        {character.patronus && <p>Patronus animal: {character.patronus}</p>}
      </>
    );
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
        renderCharacters,
        setCharacter,
        renderOneCharacter,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export default CharactersContextProvider;
