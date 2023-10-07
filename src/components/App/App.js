import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import {
  createTheme,
  ThemeProvider,
  Container,
  Typography,
  AppBar,
  Toolbar,
  Button,
} from "@mui/material";

import MovieList from "../MovieList/MovieList";
import "./App.css";
import MovieDetails from "../MovieDetails/MovieDetails";
import MovieForm from "../MovieForm/MovieForm";

const theme = createTheme({
  palette: {
    mode: "dark", // Enables dark mode
    primary: {
      main: "#ffffff", // White color
    },
    secondary: {
      main: "#000000", // Black color
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: "bold",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <AppBar position="fixed">
            <Toolbar>
              <Button
                className="homeButton"
                color="inherit"
                component={Link}
                to="/"
              >
                Home
              </Button>
              <Typography
                variant="h1"
                component="div"
                style={{ flexGrow: 1, textAlign: "center" }}
              >
                The Movies Saga!
              </Typography>

              <Button color="inherit" component={Link} to="/form">
                Add Movie
              </Button>
            </Toolbar>
          </AppBar>
          <Container>
            <Route path="/" exact>
              <MovieList />
            </Route>
            <Route path="/details/:id">
              <MovieDetails />
            </Route>

            <Route path="/form">
              <MovieForm />
            </Route>
          </Container>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
