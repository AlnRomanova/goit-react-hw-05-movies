import React from 'react';
import css from './MovieDetails.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesById } from 'services/moviesAPI';
import { Outlet } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import defaultImage from 'image/default.jpg';

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMoviesById(movieId)
      .then(setMovie)
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const { title, overview, vote_average, poster_path, genres } = movie;

  return (
    <>
      <button
        className={css.btn}
        type="button"
        onClick={() => {
          navigate(location.state?.from ?? '/');
        }}
      >
        Go back
      </button>
      <div className={css.movie}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImage
          }
          alt={title}
        />
        <div className={css.movieDescription}>
          <h2 className={css.movieTitle}>{title}</h2>
          <h3 className={css.movieNextTitle}>User Score:</h3>
          <p className={css.movieInfo}> {vote_average}</p>
          <h3 className={css.movieNextTitle}>Overview:</h3>
          <p className={css.movieInfo}>{overview}</p>
          <h3 className={css.movieNextTitle}>Genres:</h3>
          <p className={css.movieInfo}>
            {genres.map(genre => genre.name).join(', ')}
          </p>
        </div>
      </div>

      <Link to="movieId" state={{ from: location }}></Link>
      <Link
        className={css.cast}
        to="cast"
        state={{ from: location.state?.from }}
      >
        Cast
      </Link>
      <Link
        className={css.review}
        to="reviews"
        state={{ from: location.state?.from }}
      >
        Review
      </Link>
      <Outlet />
    </>
  );
};

export default MovieDetails;
