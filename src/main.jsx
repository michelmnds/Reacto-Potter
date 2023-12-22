import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { HouseContextProvider } from "./providers/HouseContext.jsx";
import { UserContextProvider } from "./providers/UserContext.jsx";
import CharactersContextProvider from "./providers/CharacterContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <HouseContextProvider>
          <CharactersContextProvider>
            <App />
          </CharactersContextProvider>
        </HouseContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
