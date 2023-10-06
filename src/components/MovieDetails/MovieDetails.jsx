import React from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  return <h3>Details</h3>;
}

export default MovieDetails;
