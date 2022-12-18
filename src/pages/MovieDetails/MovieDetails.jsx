import React from 'react';
import useFetchMovies from 'hooks/useFetchMovie';
import { Outlet } from 'react-router-dom';



const MovieDetails = () => {

  const movie = useFetchMovies();

  return (
    <>
    <div>
          <p>{movie.title}</p>
          <img src={`${movie.poster_path}`} alt={movie.title} />
          <p>Vote: {movie.vote_average}</p>
          <p>Overview: {movie.overview}</p>
          <p>Genres: {movie.genres[0].name}</p>
        </div>
        <Outlet/>
        </>
  )
}

export default MovieDetails;
