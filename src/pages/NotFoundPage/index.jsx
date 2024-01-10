import { Header } from "../../components/Header";
import "./style.css";
import { Footer } from "../../components/Footer";

export const NotFoundPage = () => {
  return (
    <>
      <Header />
      <div className="mainPageContainer">
        <h1>404 - Page not found</h1>
      </div>
      <Footer />
    </>
  );
};
