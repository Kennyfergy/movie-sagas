import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import "./MovieList.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function MovieList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  const handleCardClick = (movieId) => {
    history.push(`/details/${movieId}`);
  };

  return (
    <main>
      <Typography className="movie-header" variant="h2" gutterBottom>
        MovieList
      </Typography>
      <section className="movies">
        {movies.map((movie) => (
          <Card
            key={movie.id}
            className="movie-card"
            onClick={() => handleCardClick(movie.id)}
            raised
          >
            <CardMedia
              component="img"
              height="300"
              image={movie.poster}
              alt={movie.title}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {movie.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}

export default MovieList;
