import { useNavigate } from "react-router-dom";
import "./MovieCard.css";

function MovieCard (props) {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <span className="title">
          {props.title}
        </span>
        <button onClick={() => navigate(`/movie/${props.id}`)}>
          View
        </button>
      </div>
    </>
  )
};

export default MovieCard;
