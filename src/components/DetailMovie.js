function DetailMovie({
  mediumCoverImg,
  title,
  year,
  rating,
  runtime,
  description,
  genres,
  code,
}) {
  return (
    <div>
      <img src={mediumCoverImg} alt={title} />
      <h1>{title}</h1>
      <span>({year})</span>
      <span>
        <br />
        Rating : {rating}
      </span>
      <span>
        <br />
        RunTime : {runtime}
      </span>
      <p>{description}</p>
      <ul>{genres ? genres.map((g) => <li key={g}>{g}</li>) : null}</ul>
      <a href={`https://www.imdb.com/title/${code}`} target="_blank">
        More Info
      </a>
    </div>
  );
}

export default DetailMovie;
