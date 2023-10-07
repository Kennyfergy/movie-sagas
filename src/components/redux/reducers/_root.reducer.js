import { combineReducers } from "redux";

import movieDetails from "./movies.reducer";
import movies from "./movies.reducer";
import genres from "./genres.reducer";

export default combineReducers({ movieDetails, movies, genres });
