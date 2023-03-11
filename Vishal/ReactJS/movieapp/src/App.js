import React, { useState, useEffect, useCallback } from "react";
import Loading from "../src/assests/Loading_icon.gif";
import MoviesList from "./components/MoviesList";
import AddMovie from "../src/components/AddMovie";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isloading, setIsLoding] = useState(false);
  const [error, setError] = useState(null);
  // function fetchMoviesHandler() {
  //   fetch("https://swapi.dev/api/films/")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       const transformedMovies = data.results.map((movieData) => {
  //         return {
  //           // Title: movieData.Title,
  //           // Year: movieData.Year,
  //           // Runtime: movieData.Runtime,
  //           // Poster: movieData.Poster,
  //           id: movieData.episode_id,
  //           title: movieData.title,
  //           openingText: movieData.opening_crawl,
  //           releaseDate: movieData.release_date,
  //         };
  //       });
  //       setMovies(transformedMovies);
  //     });
  // }

  // async function fetchMoviesHandler() {
  //   setIsLoding(true);
  //   setError(null);

  //   try {
  //     const response = await fetch("https://swapi.dev/api/films/");

  //     if (!response.ok) {
  //       throw new Error("Somting Went Wrong!!");
  //     }

  //     const data = await response.json();
  //     const transformedMovies = data.results.map((movieData) => {
  //       return {
  //         // Title: movieData.Title,
  //         // Year: movieData.Year,
  //         // Runtime: movieData.Runtime,
  //         // Poster: movieData.Poster,
  //         id: movieData.episode_id,
  //         title: movieData.title,
  //         openingText: movieData.opening_crawl,
  //         releaseDate: movieData.release_date,
  //       };
  //     });
  //     setMovies(transformedMovies);
  //   } catch (e) {
  //     setError(e.message);
  //   }
  //   setIsLoding(false);
  // }

  // const fetchMoviesHandler = useCallback(async () => {
  //   setIsLoding(true);
  //   setError(null);

  //   try {
  //     const response = await fetch(
  //       "https://react-movie-app-b8997-default-rtdb.firebaseio.com/movies.json"
  //     );

  //     if (!response.ok) {
  //       throw new Error("Somting Went Wrong!!");
  //     }

  //     const data = await response.json();
  //     const transformedMovies = data.results.map((movieData) => {
  //       return {
  //         // Title: movieData.Title,
  //         // Year: movieData.Year,
  //         // Runtime: movieData.Runtime,
  //         // Poster: movieData.Poster,
  //         id: movieData.episode_id,
  //         title: movieData.title,
  //         openingText: movieData.opening_crawl,
  //         releaseDate: movieData.release_date,
  //       };
  //     });
  //     setMovies(transformedMovies);
  //   } catch (e) {
  //     setError(e.message);
  //   }
  //   setIsLoding(false);
  // }, []);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoding(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-movie-app-b8997-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,

          openingText: data[key].openingText,
          releaseDate: data[key].title,
        });
      }

      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoding(false);
  }, []);
  // useEffect(() => {
  //   fetchMoviesHandler();
  // }, [fetchMoviesHandler]);
  async function addMovieHandler(movie) {
    const response = await fetch(
      "https://react-movie-app-b8997-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  let content = <p>Found No Movies</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isloading) {
    content = <img src={Loading}></img>;
  }
  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
