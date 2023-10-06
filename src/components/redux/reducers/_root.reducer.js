import { combineReducers } from "redux";

import detailsReducer from "./details.reducer";
import movies from "./details.reducer";
import genres from "./details.reducer";

export default combineReducers({ detailsReducer, movies, genres });
