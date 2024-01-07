import { createContext, useState } from "react";

export const QuizContext = createContext();

export const QuizContextProvider = ({ children }) => {
  const resetHouseScores = {
    gryffindor: 0,
    slytherin: 0,
    ravenclaw: 0,
    huffelpuff: 0,
  };
  const [currentHouseScores, setCurrentHouseScores] =
    useState(resetHouseScores);
  const [currentQuizPage, setCurrentQuizPage] = useState("");

  return (
    <QuizContext.Provider
      value={{
        currentHouseScores,
        setCurrentHouseScores,
        currentQuizPage,
        setCurrentQuizPage,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
