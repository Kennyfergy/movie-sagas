import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import "./MovieForm.css";

function MovieForm() {
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const history = useHistory();

  //const handleTitleChange = (event) => setTitle(event.target.value);
  //const handlePosterChange = (event) => setPoster(event.target.value);
  //const handleDescriptionChange = (event) => setDescription(event.target.value);
  //const handleGenreChange = (event) => setGenre(event.target.value);
  const handleCancel = () => history.push("/");

  const handleSave = async () => {
    try {
      // API call to save the movie
      await axios.post("/path-to-api-endpoint", {
        //need to make router yet
        title,
        poster,
        description,
        genre, //need to update the genre axios post
      });
      // Navigate to home on successful save
      history.push("/");
    } catch (error) {
      console.error("Error saving the movie:", error);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <TextField
          fullWidth
          label="Movie Title"
          variant="outlined"
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          fullWidth
          label="Poster URL"
          variant="outlined"
          margin="normal"
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
        />
        <TextField
          fullWidth
          label="Description"
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
            labelId="genre-label"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            label="Genre"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>Adventure</MenuItem>
            <MenuItem value={2}>Animated</MenuItem>
            <MenuItem value={3}>Biographical</MenuItem>
            <MenuItem value={4}>Comedy</MenuItem>
            <MenuItem value={5}>Disaster</MenuItem>
            <MenuItem value={6}>Drama</MenuItem>
            <MenuItem value={7}>Epic</MenuItem>
            <MenuItem value={8}>Fantasy</MenuItem>
            <MenuItem value={9}>Musical</MenuItem>
            <MenuItem value={10}>Romantic</MenuItem>
            <MenuItem value={11}>Science Fiction</MenuItem>
            <MenuItem value={12}>Space-Opera</MenuItem>
            <MenuItem value={13}>Superhero</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          fullWidth
          style={{
            marginTop: "10px",
            backgroundColor: "#450a0a",
            color: "#fff",
            transition: "all 0.3s ease",
          }}
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          fullWidth
          style={{
            marginTop: "10px",
            backgroundColor: "#022c22",
            color: "#fff",
            transition: "all 0.3s ease",
          }}
          onClick={handleSave}
        >
          Save
        </Button>
      </div>
    </div>
  );
}

export default MovieForm;
