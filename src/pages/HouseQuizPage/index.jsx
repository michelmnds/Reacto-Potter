import { Link, useParams } from "react-router-dom";
import { QuizContext } from "../../providers/QuizContext";
import { HouseContext } from "../../providers/HouseContext";
import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import "./style.css";
import gryffindor from "../../assets/gryffindor.png";
import slytherin from "../../assets/slytherin.png";
import hufflepuff from "../../assets/hufflepuff.png";
import ravenclaw from "../../assets/ravenclaw.png";
import { Footer } from "../../components/Footer";

export const HouseQuizPage = () => {
  const { quizpage } = useParams();
  const {
    quiz,
    setCurrentQuizPage,
    handleQuizAnswer,
    resetQuizState,
    selectedHouse,
    calculateQuizResults,
    resultDescription,
    resultsVisibility,
    setResultsVisibility,
  } = useContext(QuizContext);
  const { handleClick } = useContext(HouseContext);
  const [answerOrder, setAnswerOrder] = useState([
    "gryffindorAnswer",
    "slytherinAnswer",
    "ravenclawAnswer",
    "hufflepuffAnswer",
  ]);

  const displayQuizResults = () => {
    calculateQuizResults();
    setResultsVisibility(true);
  };
  //sets correct image source to render image after quiz
  const showSelectedHouse = () => {
    if (selectedHouse === "gryffindor") {
      return gryffindor;
    } else if (selectedHouse === "slytherin") {
      return slytherin;
    } else if (selectedHouse === "hufflepuff") {
      return hufflepuff;
    } else if (selectedHouse === "ravenclaw") {
      return ravenclaw;
    }
  };

  const quizIndex = quizpage - 1;
  //ensures navigation to next quiz question and after 10 total questions sends user to results page
  const nextPage = quizpage < 10 ? parseInt(quizpage) + 1 : "results";
  //stores current page to allow for navigation back onto the quizpage at a later stage
  setCurrentQuizPage(quizpage);

  //randomizes order of answers
  const randomizeAnswers = () => {
    const randomAnswerOrder = answerOrder;
    for (let i = randomAnswerOrder.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomAnswerOrder[i], randomAnswerOrder[j]] = [
        randomAnswerOrder[j],
        randomAnswerOrder[i],
      ];
    }
    setAnswerOrder(randomAnswerOrder);
  };

  //rerender randomized order of answers
  useEffect(() => {
    randomizeAnswers();
  }, [quizpage]);

  return (
    <>
      <Header />
      <div className="mainPageContainer">
        {/*Logic to either render the results page or individual quiz pages depending on the parems */}
        {quizpage === "results" ? (
          <div>
            {/*displays button until clicked, then displays the results */}
            {resultsVisibility ? (
              <div>
                <Link to="/home">
                  <img
                    className="resultEmblem"
                    src={showSelectedHouse()}
                    alt={`${selectedHouse.toUpperCase()}`}
                    onClick={handleClick}
                  />
                </Link>

                <p className="resultsText">
                  Your House is {selectedHouse}. Click on the emblem to join
                  your the house!
                </p>
                <p>{resultDescription[selectedHouse]}</p>
              </div>
            ) : (
              <button
                className="resultsBtn"
                type="button"
                onClick={displayQuizResults}
              >
                Calculate Results
              </button>
            )}

            <Link to={`/quiz/1`} onClick={resetQuizState}>
              I am not happy with the house I got and would like to start over
            </Link>
          </div>
        ) : (
          <div className="quizCtn">
            <h2 className="quizQuestion">{quiz[quizIndex].question} </h2>
            <div className="quizAnswersCtn">
              <Link
                className="quizAnswerCard"
                onClick={() => handleQuizAnswer(answerOrder[0], quizIndex)}
                to={`/quiz/${nextPage}`}
              >
                {quiz[quizIndex][answerOrder[0]]}
              </Link>

              <Link
                className="quizAnswerCard"
                onClick={() => handleQuizAnswer(answerOrder[1], quizIndex)}
                to={`/quiz/${nextPage}`}
              >
                {quiz[quizIndex][answerOrder[1]]}
              </Link>

              <Link
                className="quizAnswerCard"
                onClick={() => handleQuizAnswer(answerOrder[2], quizIndex)}
                to={`/quiz/${nextPage}`}
              >
                {quiz[quizIndex][answerOrder[2]]}
              </Link>

              <Link
                className="quizAnswerCard"
                onClick={() => handleQuizAnswer(answerOrder[3], quizIndex)}
                to={`/quiz/${nextPage}`}
              >
                {quiz[quizIndex][answerOrder[3]]}
              </Link>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};
