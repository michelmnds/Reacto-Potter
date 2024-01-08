import { Link, useParams } from "react-router-dom";
import { QuizContext } from "../../providers/QuizContext";
import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import "./style.css";

export const HouseQuizPage = () => {
  const { quizpage } = useParams();
  const { quiz, setCurrentQuizPage } = useContext(QuizContext);
  const [answerOrder, setAnswerOrder] = useState([
    "gryffindorAnswer",
    "slytherinAnswer",
    "ravenclawAnswer",
    "huffelpuffAnswer",
  ]);
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
      {/*Either create logic to render results in quiz context or create separate context - also classes needed to style different answers
      --also: idea to randomize order of 4 answer options - make create randomizer function */}
      {quizpage === "results" ? (
        <p>Your House is ...</p>
      ) : (
        <div className="quizCtn">
          <h2 className="quizQuestion">{quiz[quizpage - 1].question} </h2>
          <div className="quizAnswersCtn">
            <Link className="quizAnswerCard" to={`/quiz/${nextPage}`}>
              {quiz[quizpage - 1][answerOrder[0]]}
            </Link>

            <Link className="quizAnswerCard" to={`/quiz/${nextPage}`}>
              {quiz[quizpage - 1][answerOrder[1]]}
            </Link>

            <Link className="quizAnswerCard" to={`/quiz/${nextPage}`}>
              {quiz[quizpage - 1][answerOrder[2]]}
            </Link>

            <Link className="quizAnswerCard" to={`/quiz/${nextPage}`}>
              {quiz[quizpage - 1][answerOrder[3]]}
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
