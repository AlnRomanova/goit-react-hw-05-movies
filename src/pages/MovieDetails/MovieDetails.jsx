import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesById } from "services/moviesAPI";
import { Outlet } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


const MovieDetails = () => {
  const {movieId} = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [movie, setMovie] = useState(null);


   useEffect(()=> {
     fetchMoviesById(movieId)
    .then(setMovie)
    .catch(error => {
      console.log(error)
    });

   }, [movieId]);



  if (!movie) {
    return null
 }


 const {title, overview, vote_average, poster_path, genres,
 } = movie;


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
          <p>{title}</p>
          <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title} />
          <p>User Score: {vote_average}</p>
          <p>Overview: {overview}</p>
          <p>Genres: {genres.map(genre => genre.name).join(', ')}</p>

        </div>


        <Link state={{from: location}} to="movieId"></Link>
        <Link state={{from: location}} to="cast">
        Cast
      </Link>
      <Link state={{from: location}} to="reviews">
       Review
      </Link>
        <Outlet/>
        </>
  )
}


export default MovieDetails;
