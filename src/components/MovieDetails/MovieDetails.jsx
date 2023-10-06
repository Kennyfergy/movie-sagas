import React from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function MovieDetails() {
  const history = useHistory();
  const { id } = useParams();
  return (
    <div>
      <h3>Details</h3>
      {/* <button onClick={() => history.push("/")}>HOME</button> */}
    </div>
  );
}

export default MovieDetails;
