import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import DetailMovie from "../components/DetailMovie";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState("");
  useEffect(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  }, []);
  return (
    <div>
      <h1>
        {loading ? (
          "Loading..."
        ) : (
          <DetailMovie
            mediumCoverImg={movie.medium_cover_image}
            title={movie.title}
            year={movie.year}
            rating={movie.rating}
            runtime={movie.runtime}
            description={movie.description_full}
            genres={movie.genres}
            code={movie.imdb_code}
          />
        )}
      </h1>
    </div>
  );
}

export default Detail;
