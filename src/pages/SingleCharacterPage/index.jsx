/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { CharactersContext } from "../../providers/CharacterContext";
import { useParams } from "react-router";
import { Header } from "../../components/Header";

import "./style.css";
import { Footer } from "../../components/Footer";
import { RenderOneCharacter } from "../../components/RenderOneChar";

export const SingleCharacterPage = () => {
  const { charId } = useParams();
  const { getOneCharacter, character } = useContext(CharactersContext);

  useEffect(() => {
    getOneCharacter(charId);
  }, [charId]);

  return (
    <>
      <Header />
      <div className="mainPageContainer">
        <RenderOneCharacter character={character} />
      </div>
      <Footer />
    </>
  );
};
