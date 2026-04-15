import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import MovieDetailsPage from "./pages/MovieDetailsPage.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";

export default function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Movie Discovery</h1>
        <nav className="app__nav">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </nav>
      </header>

      <main className="app__main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </main>
    </div>
  );
}
