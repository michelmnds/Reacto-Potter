import { useContext, useEffect } from "react";
import { CharactersContext } from "../../providers/CharacterContext";
import { UserContext } from "../../providers/UserContext";
import { Header } from "../../components/Header";
import "./style.css";
import { Footer } from "../../components/Footer";

export const HomePage = () => {
  // eslint-disable-next-line no-unused-vars
  const { renderCharacters, renderPages, fetchCharacters } =
    useContext(CharactersContext);
  const { currentHouse } = useContext(UserContext);

  useEffect(() => {
    fetchCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentHouse]);

  return (
    <>
      <Header />
      <div className="mainPageContainer">
        <h1 className="title">
          All characters
          {currentHouse === null || currentHouse === "none"
            ? ""
            : ` of house ${currentHouse}`}
        </h1>
        <ul className="charList">{renderCharacters()}</ul>

        {renderPages()}
      </div>
      <Footer />
    </>
  );
};
