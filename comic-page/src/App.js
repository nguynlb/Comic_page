import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/api/login" element={<LoginPage />} />
        <Route path="/api/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
