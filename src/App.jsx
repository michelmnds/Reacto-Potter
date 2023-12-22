import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LandingPage } from "./pages/LandingPage";
import { ProfilePage } from "./pages/ProfielPage";
import { SingleCharacterPage } from "./pages/SingleCharacterPage";

function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/home" />
      <Route element={<LandingPage />} path="/" />
      <Route element={<ProfilePage />} path="/profile" />
      <Route element={<SingleCharacterPage />} path="/character/:charId" />
    </Routes>
  );
}

export default App;
