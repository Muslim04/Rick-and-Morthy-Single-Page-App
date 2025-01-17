import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProfilePage from "./components/ProfilePage";
import { CharacterProvider } from "./context/CharacterContext";

function App() {
  return (
    <>
      <CharacterProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/character/:id" element={<ProfilePage />} />
        </Routes>
      </CharacterProvider>
    </>
  );
}

export default App;
