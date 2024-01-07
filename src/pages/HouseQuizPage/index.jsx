import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export const HouseQuizPage = () => {
  const { quizpage } = useParams();
  //ensures navigation to next quiz question and after 10 total questions sends user to results page
  const nextPage = quizpage < 10 ? parseInt(quizpage) + 1 : "results";
  return (
    <>
      <h2>House Quiz Question {quizpage} </h2>
      <Link to={`/quiz/${nextPage}`}>Hogwards answer -- go to next page </Link>
    </>
  );
};
