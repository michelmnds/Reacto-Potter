import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";
import { Link } from "react-router-dom";
import ravenclaw from "../assets/ravenclaw.png";
import hufflepuff from "../assets/hufflepuff.png";
import slytherin from "../assets/slytherin.png";
import gryffindor from "../assets/gryffindor.png";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      .map((character) => {
        //Render cards based on characters house (uses Switch)
        switch (character.house) {
          case "Slytherin":
            return (
              <li
                style={{ borderRight: "5px solid #2a623d" }}
                className="card"
                key={character.id}
              >
                {character.image ? (
                  <div
                    style={{
                      borderLeft: "5px solid #2a623d",
                      backgroundImage: `url(${character.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "top",
                    }}
                    alt={character.name}
                    className="charImg"
                  />
                ) : (
                  <div
                    style={{
                      borderLeft: "5px solid #2a623d",
                      backgroundImage: `url(${slytherin})`,
                      backgroundSize: 80,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                    alt={character.name}
                    className="charImg"
                  />
                )}

                <div className="charInfos">
                  <Link
                    style={{ color: "#2a623d" }}
                    className="charName"
                    to={`/character/${character.id}`}
                  >
                    {character.name}
                  </Link>
                  <span className="charHouse">
                    <strong>House: </strong>
                    {character.house}
                  </span>
                  {character.patronus && (
                    <span className="charPatronus">
                      <strong>Patronus animal: </strong>
                      {character.patronus}
                    </span>
                  )}
                </div>
              </li>
            );
          case "Gryffindor":
            return (
              <li
                style={{ borderRight: "5px solid #ae0001" }}
                className="card"
                key={character.id}
              >
                {character.image ? (
                  <div
                    style={{
                      borderLeft: "5px solid #ae0001",
                      backgroundImage: `url(${character.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "top",
                    }}
                    alt={character.name}
                    className="charImg"
                  />
                ) : (
                  <div
                    style={{
                      borderLeft: "5px solid #ae0001",
                      backgroundImage: `url(${gryffindor})`,
                      backgroundSize: 80,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                    alt={character.name}
                    className="charImg"
                  />
                )}

                <div className="charInfos">
                  <Link
                    style={{ color: "#ae0001" }}
                    className="charName"
                    to={`/character/${character.id}`}
                  >
                    {character.name}
                  </Link>
                  <span className="charHouse">
                    <strong>House: </strong>
                    {character.house}
                  </span>
                  {character.patronus && (
                    <span className="charPatronus">
                      <strong>Patronus animal: </strong>
                      {character.patronus}
                    </span>
                  )}
                </div>
              </li>
            );
          case "Ravenclaw":
            return (
              <li
                style={{ borderRight: "5px solid #222f5b" }}
                className="card"
                key={character.id}
              >
                {character.image ? (
                  <div
                    style={{
                      borderLeft: "5px solid #222f5b",
                      backgroundImage: `url(${character.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "top",
                    }}
                    alt={character.name}
                    className="charImg"
                  />
                ) : (
                  <div
                    style={{
                      borderLeft: "5px solid #222f5b",
                      backgroundImage: `url(${ravenclaw})`,
                      backgroundSize: 80,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                    alt={character.name}
                    className="charImg"
                  />
                )}

                <div className="charInfos">
                  <Link
                    style={{ color: "#222f5b" }}
                    className="charName"
                    to={`/character/${character.id}`}
                  >
                    {character.name}
                  </Link>
                  <span className="charHouse">
                    <strong>House: </strong>
                    {character.house}
                  </span>
                  {character.patronus && (
                    <span className="charPatronus">
                      <strong>Patronus animal: </strong>
                      {character.patronus}
                    </span>
                  )}
                </div>
              </li>
            );
          case "Hufflepuff":
            return (
              <li
                style={{ borderRight: "5px solid #ecb939" }}
                className="card"
                key={character.id}
              >
                {character.image ? (
                  <div
                    style={{
                      borderLeft: "5px solid #ecb939",
                      backgroundImage: `url(${character.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "top",
                    }}
                    alt={character.name}
                    className="charImg"
                  />
                ) : (
                  <div
                    style={{
                      borderLeft: "5px solid #ecb939",
                      backgroundImage: `url(${hufflepuff})`,
                      backgroundSize: 80,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                    alt={character.name}
                    className="charImg"
                  />
                )}

                <div className="charInfos">
                  <Link
                    style={{ color: "#ecb939" }}
                    className="charName"
                    to={`/character/${character.id}`}
                  >
                    {character.name}
                  </Link>
                  <span className="charHouse">
                    <strong>House: </strong>
                    {character.house}
                  </span>
                  {character.patronus && (
                    <span className="charPatronus">
                      <strong>Patronus animal: </strong>
                      {character.patronus}
                    </span>
                  )}
                </div>
              </li>
            );
        }
      });
  };

  const renderOneCharacter = () => {
    return (
      <div>
        <h1>{character.name}</h1>
        <img src={character.image} alt={character.name} />
        <p>House: {character.house}</p>
        {character.patronus && <p>Patronus animal: {character.patronus}</p>}
      </div>
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
        <div className="pageContainer">
          <button type="button" onClick={() => handlePageChange(-1)}>
            &lt;
          </button>
          <p>{currentPage}</p>
          <button type="button" onClick={() => handlePageChange(1)}>
            &gt;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [needRefresh]);

  useEffect(() => {
    if (location.pathname === "/characters" && isStale) {
      triggerRefresh();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
