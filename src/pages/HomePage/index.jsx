import { useContext, useEffect } from "react";
import { CharactersContext } from "../../providers/CharacterContext";
import { UserContext } from "../../providers/UserContext";

export const HomePage = () => {
  const { triggerRefresh, renderCharacters, renderPages, fetchCharacters } =
    useContext(CharactersContext);
  const { currentHouse } = useContext(UserContext);

  useEffect(() => {
    fetchCharacters();
  }, [currentHouse]);

  return (
    <>
      <h1>
        All characters
        {currentHouse === null ? "" : ` of house ${currentHouse}`}
      </h1>
      <button type="button" onClick={triggerRefresh}>
        Refresh
      </button>
      <ul>{renderCharacters()}</ul>

      {renderPages()}
    </>
  );
};
