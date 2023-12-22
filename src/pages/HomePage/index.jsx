import { useContext, useState } from "react";
import { CharactersContext } from "../../providers/CharacterContext";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const { characters, triggerRefresh } = useContext(CharactersContext);
  const [house, setHouse] = useState("Slytherin");
  return (
    <>
      <h1>All characters</h1>
      <button type="button" onClick={triggerRefresh}>
        Refresh
      </button>
      <ul>
        {house === ""
          ? characters.map((character) => (
              <li key={character.id}>
                <Link to={`/character/${character.id}`}>{character.name}</Link>
              </li>
            ))
          : characters
              .filter((character) => {
                return character.house === house;
              })
              .map((character) => (
                <li key={character.id}>
                  <Link to={`/character/${character.id}`}>
                    {character.name}
                  </Link>
                </li>
              ))}
      </ul>
    </>
  );
};
