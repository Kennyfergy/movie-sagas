import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function MovieForm() {
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [description, setDescription] = useState("");
  //   const [genre, setGenre] = useState("");
  const history = useHistory();

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handlePosterChange = (event) => setPoster(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);

  const handleCancel = () => history.push("/");

  const handleSave = async () => {
    try {
      // API call to save the movie
      await axios.post("/path-to-api-endpoint", {
        //need to make router yet
        title,
        poster,
        description,
        // genre,
      });
      // Navigate to home on successful save
      history.push("/");
    } catch (error) {
      console.error("Error saving the movie:", error);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Movie Title"
          value={title}
          onChange={handleTitleChange}
        />
        <input
          type="url"
          placeholder="Poster URL"
          value={poster}
          onChange={handlePosterChange}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={handleDescriptionChange}
        />
        {/* <select value={genre} onChange={handleGenreChange}>
          
          <option value="" disabled>
            Select genre
          </option>
          <option value="1">Adventure</option>
          <option value="2">Animated</option>
          <option value="2">Biographical</option>
          <option value="2">Comedy</option>
          <option value="2">Disaster</option>
          <option value="2">Drama</option>
          <option value="2">Epic</option>
          <option value="2">Fantasy</option>
          <option value="2">Musical</option>
          <option value="2">Romantic</option>
          <option value="2">Science Fiction</option>
          <option value="2">Space-Opera</option>
          <option value="2">Superhero</option>
        </select> */}
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

export default MovieForm;
