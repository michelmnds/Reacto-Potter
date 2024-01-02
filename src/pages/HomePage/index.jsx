import { useContext, useEffect } from "react";
import { CharactersContext } from "../../providers/CharacterContext";
import { UserContext } from "../../providers/UserContext";
import { Header } from "../../components/Header";
import "./style.css";

export const HomePage = () => {
  // eslint-disable-next-line no-unused-vars
  const { triggerRefresh, renderCharacters, renderPages, fetchCharacters } =
    useContext(CharactersContext);
  const { currentHouse } = useContext(UserContext);

  useEffect(() => {
    fetchCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentHouse]);

  return (
    <>
      <Header />

      <h1 className="title">
        All characters
        {currentHouse === null ? "" : ` of house ${currentHouse}`}
      </h1>
      {/* <button type="button" onClick={triggerRefresh}>
        Refresh
      </button> */}
      <ul className="charList">{renderCharacters()}</ul>

      {renderPages()}
    </>
  );
};
