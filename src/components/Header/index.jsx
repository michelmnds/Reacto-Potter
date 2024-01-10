import "./style.css";
import logo from "../../assets/logo.png";
import logout from "../../assets/logout.png";
import home from "../../assets/home.png";
import { Link } from "react-router-dom";
import { CharactersContext } from "../../providers/CharacterContext";
import { useContext } from "react";

export const Header = () => {
  const { setCurrentPage } = useContext(CharactersContext);
  return (
    <div className="headerContainer">
      <Link to="/home">
        <img className="logo" src={logo} alt="Logo" />
      </Link>

      <div className="rightSide">
        <Link to="/house">
          <img className="home" src={home} alt="" />
        </Link>
        <Link
          to="/"
          onClick={() => {
            localStorage.clear();
            setCurrentPage(1);
          }}
        >
          <img className="logout" src={logout} alt="" />
        </Link>
      </div>
    </div>
  );
};
