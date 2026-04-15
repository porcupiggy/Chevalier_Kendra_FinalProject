import { useState } from "react";
import _ from "lodash";
import { searchMovies } from "../api.js";
import { useFavorites } from "../context/FavoritesContext.jsx";
import MovieCard from "../components/MovieCard.jsx";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState("idle");

  const { favorites, addFavorite, removeFavorite } = useFavorites();

  async function handleSearch(e) {
    e.preventDefault();

    const trimmed = query.trim();
    if (!trimmed) return;

    setStatus("loading");

    try {
      const results = await searchMovies(trimmed);

      if (!results || results.length === 0) {
        setMovies([]);
        setStatus("idle");
        return;
      }

      const sorted = _.sortBy(results, (m) => m.Year);
      setMovies(sorted);
    } catch (err) {
      console.error("Search failed:", err);
      setMovies([]);
    }

    setStatus("idle");
  }

  function isFavorite(id) {
    return favorites.some((m) => m.imdbID === id);
  }

  function handleToggleFavorite(movie) {
    if (isFavorite(movie.imdbID)) {
      removeFavorite(movie.imdbID);
    } else {
      addFavorite(movie);
    }
  }

  return (
    <section className="page page--home">
      <form id="search-form" className="search" onSubmit={handleSearch}>
        <input
          id="search-input"
          className="search__input"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search__button" type="submit">
          Search
        </button>
      </form>

      {status === "loading" && <p id="loading">Loading…</p>}

      <div id="results" className="movies-grid">
        {movies.length === 0 && status === "idle" && (
          <p>No results yet. Try searching for a movie.</p>
        )}

        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            isFavorite={isFavorite(movie.imdbID)}
            onToggleFavorite={handleToggleFavorite}
          />
        ))}
      </div>
    </section>
  );
}
