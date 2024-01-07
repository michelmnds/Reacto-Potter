import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LandingPage } from "./pages/LandingPage";
import { ProfilePage } from "./pages/ProfilePage";
import { SingleCharacterPage } from "./pages/SingleCharacterPage";
import { HouseQuizPage } from "./pages/HouseQuizPage";

function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/home" />
      <Route element={<LandingPage />} path="/" />
      {/* using /:quizpage to be able to use numbers but also text like quiz/result */}
      <Route element={<HouseQuizPage />} path="/quiz/:quizpage"></Route>
      <Route element={<ProfilePage />} path="/profile" />
      <Route element={<SingleCharacterPage />} path="/character/:charId" />
    </Routes>
  );
}

export default App;
