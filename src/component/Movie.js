import React, { useEffect, useState } from "react";
import MoviesItems from "./MoviesItemes";

const Movie = (props) => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const date = new Date().toISOString().split("T")[0];
    const api_key = process.env.REACT_APP_API_KEY;
    console.log(api_key );
    console.log(process.env);
    const name = async () => {
      const url = `https://api.nytimes.com/svc/movies/v2/reviews/{type}.json/offset=${20}?api-key=${api_key}`;
      const response = await fetch(url);
      const data = await response.json();
      setMovie(data.results);
    };
    name();
  }, []);
  const moviesItems = movie.map((movie, index) => {
    return <MoviesItems data={movie} key={index} />;
  });
  return(
  <div>{moviesItems}</div>)
};

export default Movie;
