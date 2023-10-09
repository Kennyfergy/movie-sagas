## Movies Web Application

### Overview

The Movies Web Application provides a platform for exploring and interacting with a wide array of movies. A user can view the list of movies, and click on the list for further details

### Project Structure

Here's a brief overview of the main components of the project:

#### 1. Server

- `server.js`: Initializes and runs an Express server, connects middlewares, and sets up API routes.
  API routes:
- /api/movie: Is used for fetching and interacting with movies data.
- /api/genre: Is used for fetching and interacting with genres data.
- /api/details: Is used for fetching and interacting with detailed movie data.

- `modules`: This directory may contains the pool file to connect postgresql.
- `routes`: This directory contains files defining API routes and their handling logic.

#### 2. Public

- `index.html`: The main HTML file that serves as the entry point to the application.
- `images`: A directory that could store image assets used in the application.

#### 3. Source (src)

- `index.js`: The main entry point for the client-side application, initializes Redux and Redux-Saga, and renders the root React component.
- `index.css`: A CSS file to handle the main styling of the application.
- `components`: Contains various components used throughout the application, including the root App component.

### Getting Started

#### Prerequisites

- [Node.js](https://nodejs.org/) and NPM (Node Package Manager): Ensure they are installed on your machine to run the application.
- Express
- Postgresql

#### Installation and Running

1. **Clone the Repository**

   `git clone` [repo-url]
   cd [project-folder]/movies

2. **Set up Database**

   Use the attached database.sql to set up database/tables and insert data

3. **Install Dependencies**

   Navigate to the `movies` directory and run:
   `npm install`

4. **Start the Server**

   `npm run server`

5. **Start the Client**

` npm run client`

5. **Navigate to localhost:3000**

### Usage

<img width="700" alt="Screenshot 2023-10-08 at 8 36 19 PM" src="https://github.com/Kennyfergy/movie-sagas/assets/121765690/f72741b6-13bc-4420-8cb2-0701c16bcede">
<img width="700" alt="Screenshot 2023-10-08 at 8 36 34 PM" src="https://github.com/Kennyfergy/movie-sagas/assets/121765690/8c460a38-e18b-415e-afe5-5d798a483b85">
<img width="700" alt="Screenshot 2023-10-08 at 8 36 57 PM" src="https://github.com/Kennyfergy/movie-sagas/assets/121765690/83f78ac5-01de-41d1-a60e-df4f7406ed3d">
<img width="700" alt="Screenshot 2023-10-08 at 8 36 49 PM" src="https://github.com/Kennyfergy/movie-sagas/assets/121765690/d5467448-6537-4125-878e-916217adfe15">

The Movies Web Application provides a user-friendly interface for interacting with movies, allowing users to view movie lists, details, and add or update movies. Below is a basic guide on how to navigate through the application:

Movie List View:

The MovieList component displays a list of movies available in the database.
Users are able to view brief details about each movie and select them to view more details.

Movie Details View:

Once a movie is selected from the MovieList, the MovieDetails component display detailed information about the movie.
This contains more in-depth details, such as descriptions, genres, and images, among others.
Note: The URL will have a structure like /details/[movieId] where [movieId] is the unique identifier of the selected movie.

Add/Update Movie:

The application has a form allowing users to add a new movie or update existing movie details.
Users are able to input various details about the movie, such as title, description, and image URL, among others.
Note: The application uses Material-UI for a coherent and user-friendly UI. You might encounter various UI components like buttons, cards, and forms as you navigate through the application.

- List all of your favorite movies in once place
- Add a new movie to the list
- See a detailed description, with the poster, title, genres, and description

### Built With

- Javascript
- React
- Redux(with sagas)
- CSS
- Node
- Postico2
- Express
- Material UI
- Postman(to test routes)

### Contributing

To contribute to this project, please follow the steps below:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

### License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

### Acknowledgments

Thank you to Emerging Digital Academy for the skills and knowledge to complete this project!

### Support

For any questions or comments you may have, please email me at: kenneth.w.ferguson2@gmail.com
