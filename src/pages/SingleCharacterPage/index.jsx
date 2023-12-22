import { useContext, useEffect, useState } from "react";
import { CharactersContext } from "../../providers/CharacterContext";
import { useParams } from "react-router";

export const SingleCharacterPage = () => {
  const { charId } = useParams();
  const { getOneCharacter } = useContext(CharactersContext);
  const [character, setCharacter] = useState();

  useEffect(() => {
    setCharacter(getOneCharacter(charId));
  }, [charId]);
  return (
    <>
      {character && (
        <>
          <h1>{character.name}</h1>
          <img src={character.image} alt={character.name} />
          <p>House: {character.house}</p>
          {character.patronus && <p>Patronus animal: {character.patronus}</p>}
        </>
      )}
    </>
  );
};
