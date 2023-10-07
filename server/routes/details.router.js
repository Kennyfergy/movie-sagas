const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

router.get("/:id", (req, res) => {
  const query = `SELECT title, poster, description, movies.id AS id, json_agg("genres"."name") AS genre FROM movies
    JOIN movies_genres ON movies.id = movies_genres.movie_id
    JOIN genres ON genres.id = movies_genres.genre_id
    WHERE movies.id = $1
    GROUP BY movies.id;`;
  const id = req.params.id;
  pool
    .query(query, [id])
    .then((result) => {
      res.send(result.rows[0]);
    })
    .catch((err) => {
      console.log("ERROR: Get all movies", err);
      res.sendStatus(500);
    });
});

module.exports = router;
