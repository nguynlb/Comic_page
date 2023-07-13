import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import ComicPage from "./pages/Comic/ComicPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/api/login" element={<LoginPage />} />
        <Route path="/api/register" element={<RegisterPage />} />
        <Route path="/api/mangas" element={<ComicPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
