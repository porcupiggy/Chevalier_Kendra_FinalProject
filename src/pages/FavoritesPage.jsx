import { useFavorites } from "../context/FavoritesContext.jsx";
import MovieCard from "../components/MovieCard.jsx";

export default function FavoritesPage() {
  const { favorites, removeFavorite } = useFavorites();

  function handleToggleFavorite(movie) {
    removeFavorite(movie.imdbID);
  }

  return (
    <section className="page page--favorites">
      <h2>Your Favorites</h2>

      {favorites.length === 0 && <p>No favorites yet.</p>}

      <div id="favorites" className="movies-grid">
        {favorites.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            isFavorite={true}
            onToggleFavorite={handleToggleFavorite}
          />
        ))}
      </div>
    </section>
  );
}
