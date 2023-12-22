import { useContext } from "react";
import "./style.css";
import { HouseContext } from "../../providers/HouseContext";
import { Link } from "react-router-dom";
// import { UserContext } from "../../providers/UserContext";

export const LandingPage = () => {
  const { handleClick } = useContext(HouseContext);

  return (
    <div className="landingContainer">
      <button onClick={handleClick}>
        <Link to="/home">Gryffindor</Link>
      </button>
      <button onClick={handleClick}>
        <Link to="/home">Slytherin</Link>
      </button>
      <button onClick={handleClick}>
        <Link to="/home">Ravenclaw</Link>
      </button>
      <button onClick={handleClick}>
        <Link to="/home">Hufflepuff</Link>
      </button>
    </div>
  );
};
