import "./style.css";
import logo from "../../assets/logo.png";
import gitHub from "../../assets/github-mark-white.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footerContainer">
      <Link to="https://github.com/michelmnds/Reacto-Potter">
        <img className="logo" src={logo} alt="Logo" />
      </Link>
      <p className="footerText">
        <span>Made By </span>
        <Link className="linkText" to="https://github.com/michelmnds">
          <img className="githubLogo" src={gitHub} alt="GitHub" />
          Michel Mendes
        </Link>
        <span> & </span>
        <Link className="linkText" to="https://github.com/tlorius/">
          <img className="githubLogo" src={gitHub} alt="GitHub" />
          Tom Lorius
        </Link>
      </p>
    </div>
  );
};
