import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieById } from "../api.js";
import { useFavorites } from "../context/FavoritesContext.jsx";

export default function MovieDetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const isFavorite = favorites.some((m) => m.imdbID === id);

  useEffect(() => {
    async function loadMovie() {
      const data = await getMovieById(id);
      setMovie(data);
    }
    loadMovie();
  }, [id]);

  function handleToggleFavorite() {
    if (isFavorite) {
      removeFavorite(id);
    } else {
      addFavorite(movie);
    }
  }

  if (!movie) return <p>Loading movie details…</p>;

  return (
    <section className="page page--details">
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} />

      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>

      <button onClick={handleToggleFavorite}>
        {isFavorite ? "Remove Favorite" : "Add Favorite"}
      </button>
    </section>
  );
}
