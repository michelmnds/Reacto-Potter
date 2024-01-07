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
  const [currentQuizPage, setCurrentQuizPage] = useState(1);
  const quiz = [
    {
      question: "question1text?",
      gryffindorAnswer: "gryffindorAnswerText",
      slytherinAnswer: "slytherinAnswerText",
      ravenclawAnswer: "ravenclawAnswerText",
      huffelpuffAnswer: "huffelpuffAnswerText",
    },
    {
      question: "question2text?",
      gryffindorAnswer: "gryffindorAnswerText",
      slytherinAnswer: "slytherinAnswerText",
      ravenclawAnswer: "ravenclawAnswerText",
      huffelpuffAnswer: "huffelpuffAnswerText",
    },
    {
      question: "question3text?",
      gryffindorAnswer: "gryffindorAnswerText",
      slytherinAnswer: "slytherinAnswerText",
      ravenclawAnswer: "ravenclawAnswerText",
      huffelpuffAnswer: "huffelpuffAnswerText",
    },
    {
      question: "question4text?",
      gryffindorAnswer: "gryffindorAnswerText",
      slytherinAnswer: "slytherinAnswerText",
      ravenclawAnswer: "ravenclawAnswerText",
      huffelpuffAnswer: "huffelpuffAnswerText",
    },
    {
      question: "question5text?",
      gryffindorAnswer: "gryffindorAnswerText",
      slytherinAnswer: "slytherinAnswerText",
      ravenclawAnswer: "ravenclawAnswerText",
      huffelpuffAnswer: "huffelpuffAnswerText",
    },
    {
      question: "question6text?",
      gryffindorAnswer: "gryffindorAnswerText",
      slytherinAnswer: "slytherinAnswerText",
      ravenclawAnswer: "ravenclawAnswerText",
      huffelpuffAnswer: "huffelpuffAnswerText",
    },
    {
      question: "question7text?",
      gryffindorAnswer: "gryffindorAnswerText",
      slytherinAnswer: "slytherinAnswerText",
      ravenclawAnswer: "ravenclawAnswerText",
      huffelpuffAnswer: "huffelpuffAnswerText",
    },
    {
      question: "question8text?",
      gryffindorAnswer: "gryffindorAnswerText",
      slytherinAnswer: "slytherinAnswerText",
      ravenclawAnswer: "ravenclawAnswerText",
      huffelpuffAnswer: "huffelpuffAnswerText",
    },
    {
      question: "question9text?",
      gryffindorAnswer: "gryffindorAnswerText",
      slytherinAnswer: "slytherinAnswerText",
      ravenclawAnswer: "ravenclawAnswerText",
      huffelpuffAnswer: "huffelpuffAnswerText",
    },
    {
      question: "question10text?",
      gryffindorAnswer: "gryffindorAnswerText",
      slytherinAnswer: "slytherinAnswerText",
      ravenclawAnswer: "ravenclawAnswerText",
      huffelpuffAnswer: "huffelpuffAnswerText",
    },
  ];

  return (
    <QuizContext.Provider
      value={{
        currentHouseScores,
        setCurrentHouseScores,
        currentQuizPage,
        setCurrentQuizPage,
        quiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
