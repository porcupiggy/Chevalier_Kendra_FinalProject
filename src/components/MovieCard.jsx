export default function MovieCard({ movie, isFavorite, onToggleFavorite }) {
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>

      <button onClick={() => onToggleFavorite(movie)}>
        {isFavorite ? "Remove Favorite" : "Add Favorite"}
      </button>
    </div>
  );
}
