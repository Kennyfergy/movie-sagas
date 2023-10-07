import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App.js";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux"; // Provider allows us to use redux within our react app
import logger from "redux-logger"; //logger to track actions and data changes
import createSagaMiddleware from "redux-saga"; // Import saga middleware
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

import _rootReducer from "./components/redux/reducers/_root.reducer";

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery("FETCH_MOVIES", fetchAllMovies);
  yield takeEvery("FETCH_MOVIE_DETAILS", fetchMovieDetails);
}

function* fetchAllMovies() {
  // get all movies from the DB
  try {
    const movies = yield axios.get("/api/movie");
    console.log("get all:", movies.data);
    yield put({ type: "SET_MOVIES", payload: movies.data });
  } catch {
    console.log("get all error");
  }
}

function* fetchMovieDetails(action) {
  //get details from DB
  try {
    //console.log("reaching saga ");
    const response = yield axios.get(`/api/details/${action.payload}`);
    yield put({ type: "SET_MOVIE_DETAILS", payload: response.data });
  } catch (error) {
    console.log("Error in fetching movie details", error);
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
  _rootReducer,
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
