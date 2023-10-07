import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function MovieDetails() {
  const dispatch = useDispatch();

  const paramsObject = useParams();

  const movieDetails = useSelector((store) => store.movieDetails.movieDetails);

  console.log("movieDetails", movieDetails);

  const movieTitle = movieDetails.title;
  const moviePoster = movieDetails.poster;
  const movieGenreList = movieDetails.genre;
  const movieDescription = movieDetails.description;

  useEffect(() => {
    dispatch({
      type: "FETCH_MOVIE_DETAILS",
      payload: paramsObject.id,
    });
  }, []);

  return (
    <>
      <div>
        <h3>
          {movieTitle ? `Title: ${movieTitle}` : "No movie title listed"}
          <img src={moviePoster} alt={movieTitle} />
        </h3>
      </div>
      <div>
        <h4>
          <p>{movieDescription}</p>
          Genres:{" "}
          {movieGenreList && movieGenreList.length > 0 ? (
            <span>{movieGenreList.join(", ")}</span>
          ) : (
            <span>No Genres Listed</span>
          )}
        </h4>
        <h4>{movieDescription}</h4>
      </div>
    </>
  );
}

export default MovieDetails;
