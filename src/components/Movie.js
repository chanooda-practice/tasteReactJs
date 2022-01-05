import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Moive({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <Link to={`/movie/${id}`}>
        <h2>{title}</h2>
      </Link>
      <p>{summary}</p>
      <ul>{genres ? genres.map((g) => <li key={g}>{g}</li>) : null}</ul>
    </div>
  );
}

Moive.prototype = {
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Moive;
