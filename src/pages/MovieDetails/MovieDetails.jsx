import React from 'react';
import useFetchMovies from 'hooks/useFetchMovie';
import { Outlet } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';



const MovieDetails = () => {

  const movie = useFetchMovies();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
     <button
        type="button"
        onClick={() => {
          navigate(location?.state?.from ?? '/');
        }}
      >
        Go back
      </button>
    <div>
          <p>{movie.title}</p>
          <img src={`${movie.poster_path}`} alt={movie.title} />
          <p>Vote: {movie.vote_average}</p>
          <p>Overview: {movie.overview}</p>
          <p>Genres: {movie.genres[0].name}</p>
        </div>

        <Link state={location.state} to="movieId"></Link>
        <Outlet/>
        </>
  )
}

export default MovieDetails;
