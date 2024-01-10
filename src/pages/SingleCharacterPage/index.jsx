import { useContext, useEffect, useState } from "react";
import { CharactersContext } from "../../providers/CharacterContext";
import { useParams } from "react-router";
import { Header } from "../../components/Header";

import "./style.css";
import { Footer } from "../../components/Footer";

export const SingleCharacterPage = () => {
  const { charId } = useParams();
  const { getOneCharacter, setCharacter, renderOneCharacter } =
    useContext(CharactersContext);

  useEffect(() => {
    setCharacter(getOneCharacter(charId));
  }, [charId]);
  return (
    <>
      <Header />
      <div className="mainPageContainer">{renderOneCharacter()}</div>
      <Footer />
    </>
  );
};
