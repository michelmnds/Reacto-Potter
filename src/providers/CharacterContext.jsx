import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";

export const CharactersContext = createContext();

// eslint-disable-next-line react/prop-types
const CharactersContextProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [needRefresh, setNeedRefresh] = useState(false);
  const [isStale, setIsStale] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { currentHouse } = useContext(UserContext);

  const fetchCharacters = async () => {
    try {
      let response = "";

      currentHouse == null
        ? (response = await axios.get(
            "https://hp-api.onrender.com/api/characters"
          ))
        : (response = await axios.get(
            `https://hp-api.onrender.com/api/characters/house/${currentHouse}`
          ));
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

  const calculatePages = () => {
    if (characters) {
      setTotalPages(Math.ceil(characters.length / 20));
    }
  };

  useEffect(() => {
    calculatePages();
  }, [characters]);

  const getOneCharacter = (characterId) => {
    const oneCharacter = characters.find(
      (character) => character.id == characterId
    );
    return oneCharacter;
  };

  const renderCharacters = () => {
    return characters
      .slice(0 + 20 * (currentPage - 1), 19 + 20 * (currentPage - 1))
      .map((character) => (
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

  const handlePageChange = (change) => {
    if (currentPage + change > 0 && currentPage + change <= totalPages)
      setCurrentPage(currentPage + change);
  };
  //still need to add conditional to only render pagination if there are more than 20 elements
  const renderPages = () => {
    return (
      <>
        <div>
          <button type="button" onClick={() => handlePageChange(-1)}>
            Previous Page
          </button>
          <p>{currentPage}</p>
          <button type="button" onClick={() => handlePageChange(1)}>
            Next Page
          </button>
        </div>
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
        renderPages,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export default CharactersContextProvider;
