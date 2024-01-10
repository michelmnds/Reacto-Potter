import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LandingPage } from "./pages/LandingPage";
import { HousePage } from "./pages/HousePage";
import { SingleCharacterPage } from "./pages/SingleCharacterPage";
import { HouseQuizPage } from "./pages/HouseQuizPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/home" />
      <Route element={<LandingPage />} path="/" />
      {/* using /:quizpage to be able to use numbers but also text like quiz/result */}
      <Route element={<HouseQuizPage />} path="/quiz/:quizpage"></Route>
      <Route element={<HousePage />} path="/house" />
      <Route element={<SingleCharacterPage />} path="/character/:charId" />
      <Route element={<NotFoundPage />} path="/*" />
    </Routes>
  );
}

export default App;
