import { useContext } from "react";
import "./style.css";
import { HouseContext } from "../../providers/HouseContext";
import { QuizContext } from "../../providers/QuizContext";
import { Link } from "react-router-dom";
import gryffindor from "../../assets/gryffindor.png";
import slytherin from "../../assets/slytherin.png";
import hufflepuff from "../../assets/hufflepuff.png";
import ravenclaw from "../../assets/ravenclaw.png";

export const LandingPage = () => {
  const { handleClick } = useContext(HouseContext);
  const { currentQuizPage } = useContext(QuizContext);

  return (
    <>
      <div className="landingContainer">
        <div className="selectInfos">
          <span className="selectTitle">
            Welcome! <br />
            Select your house
          </span>

          <span className="selectOr">or</span>

          <div className="btnContainer">
            <Link
              to="/home"
              onClick={() => {
                localStorage.clear();
              }}
            >
              <button className="btnSelect">Show me all characters</button>
            </Link>

            <Link to={`/quiz/${currentQuizPage}`}>
              <button className="btnSelect">
                I don&apos;t know which one to choose
              </button>
            </Link>
          </div>
        </div>

        <div className="choiceContainer">
          <div className="selectContainer gryffindor">
            <Link to="/home">
              <img
                className="emblem"
                src={gryffindor}
                alt="GRYFFINDOR"
                onClick={handleClick}
              />
            </Link>
          </div>
          <div className="selectContainer slytherin">
            <Link to="/home">
              <img
                className="emblem"
                src={slytherin}
                alt="SLYTHERIN"
                onClick={handleClick}
              />
            </Link>
          </div>
          <div className="selectContainer hufflepuff">
            <Link to="/home">
              <img
                className="emblem"
                src={hufflepuff}
                alt="HUFFLEPUFF"
                onClick={handleClick}
              />
            </Link>
          </div>
          <div className="selectContainer ravenclaw">
            <Link to="/home">
              <img
                className="emblem"
                src={ravenclaw}
                alt="RAVENCLAW"
                onClick={handleClick}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
