import { useEffect, useState } from "react";
import apiClient from "../../api/apiClient";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  let { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    apiClient.getMovieData(movieId)
    .then(res => {
      setMovie(res);
      setLoading(false);
    })
    .catch((e) => {
      console.log(e);
      setLoading(false);
    });
  }, [movieId]);

  return (
    <>
    {loading && (
      <div>Loading...</div>
    )}
    {!loading && movie && (
      <>
        <div>{movie.general.title}</div>
        <div>{movie.general.tagline}</div>
        <div>{movie.general.status}</div>
      </>
    )}
    </>
  );
}

export default MovieDetail;
