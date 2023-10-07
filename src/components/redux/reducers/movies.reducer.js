import { combineReducers } from "redux";

// Used to store details for each movie
const movieDetails = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIE_DETAILS":
      return action.payload;
    default:
      return state;
  }
};

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({ movieDetails, movies });
