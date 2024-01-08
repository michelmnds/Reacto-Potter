import { Link, useParams } from "react-router-dom";
import { QuizContext } from "../../providers/QuizContext";
import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";

export const HouseQuizPage = () => {
  const { quizpage } = useParams();
  const { quiz } = useContext(QuizContext);
  const [answerOrder, setAnswerOrder] = useState([
    "gryffindorAnswer",
    "slytherinAnswer",
    "ravenclawAnswer",
    "huffelpuffAnswer",
  ]);
  //ensures navigation to next quiz question and after 10 total questions sends user to results page
  const nextPage = quizpage < 10 ? parseInt(quizpage) + 1 : "results";

  //randomizes order of answers
  const randomizeAnswers = () => {
    console.log("test");
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
        <div>
          <h2>{quiz[quizpage - 1].question} </h2>
          <ol>
            <Link to={`/quiz/${nextPage}`}>
              <li>{quiz[quizpage - 1][answerOrder[0]]}</li>
            </Link>

            <Link to={`/quiz/${nextPage}`}>
              <li>{quiz[quizpage - 1][answerOrder[1]]}</li>
            </Link>

            <Link to={`/quiz/${nextPage}`}>
              <li>{quiz[quizpage - 1][answerOrder[2]]}</li>
            </Link>

            <Link to={`/quiz/${nextPage}`}>
              <li>{quiz[quizpage - 1][answerOrder[3]]}</li>
            </Link>
          </ol>
        </div>
      )}
    </>
  );
};
