import { useContext } from "react";
import "./style.css";
import { HouseContext } from "../../providers/HouseContext";
// import { UserContext } from "../../providers/UserContext";

export const LandingPage = () => {
  const { handleClick } = useContext(HouseContext);

  return (
    <div className="landingContainer">
      <button onClick={handleClick}>Gryffindor</button>
      <button onClick={handleClick}>Slytherin</button>
      <button onClick={handleClick}>Ravenclaw</button>
      <button onClick={handleClick}>Hufflepuff</button>
    </div>
  );
};
