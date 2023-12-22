import { useContext } from "react";
import { CharactersContext } from "../../providers/CharacterContext";
import { UserContext } from "../../providers/UserContext";

export const HomePage = () => {
  const { triggerRefresh, renderCharacters, renderPages } =
    useContext(CharactersContext);
  const { currentHouse } = useContext(UserContext);
  return (
    <>
      <h1>
        All characters{currentHouse === "" ? "" : ` of house ${currentHouse}`}
      </h1>
      <button type="button" onClick={triggerRefresh}>
        Refresh
      </button>
      <ul>{renderCharacters()}</ul>

      {renderPages()}
    </>
  );
};
