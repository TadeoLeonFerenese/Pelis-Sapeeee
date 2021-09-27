import { MovieCard } from "./MovieCard";
import movies from "./movies.json";
import styles from "./EcomerceGrid.module.css";

export function EcomerceGrid() {
  return (
    <ul className={styles.ecomerceGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
