import { useEffect, useState } from "react";
import apiClient from "../../api/apiClient";
import MovieCard from "../MovieCard";

function MovieIndex () {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    apiClient.getMoviesList()
    .then(res => {
      setMovies(res);
      setLoading(false);
    })
    .catch((e) => {
      console.log(e);
      setLoading(false);
    });
  }, []);

  return (
    <>
    {loading && (
      <div>
        Loading...
      </div>
    )}
    {!loading && movies.length > 0 &&
      movies.map((item) => (
        <MovieCard
          key={item.id}
          id={item.id}
          title={item.title}
        />
    ))}
    </>
  );
}

export default MovieIndex;
