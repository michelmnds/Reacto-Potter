import { Header } from "../../components/Header";
import "./style.css";
import { Footer } from "../../components/Footer";

export const NotFoundPage = () => {
  return (
    <>
      <Header />
      <div className="notFoundPageContainer">
        <h1 className="notFoundHeader">
          The page you are looking for does no longer exist
        </h1>
      </div>
      <Footer />
    </>
  );
};
