import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesById } from "services/moviesAPI";
import { Outlet } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';



const MovieDetails = () => {
  const {movieId} = useParams();
  console.log(movieId)
  const navigate = useNavigate();
  const location = useLocation();
  const [movie, setMovie] = useState({});
  console.log(movie)

   useEffect(()=> {
     fetchMoviesById(movieId)
    .then(setMovie)
    .catch(error => {
      console.log(error)
    });

   }, [movieId]);



 const {title, overview, vote_average, poster_path} = movie;
 console.log(movie)
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
      {movie && (

    <div>
          <p>{title}</p>
          <img src={`${poster_path}`} alt={title} />
          <p>Vote: {vote_average}</p>
          <p>Overview: {overview}</p>


        </div>

        )}


        <Link state={{from: location}} to={`${movieId}`}></Link>
        <Outlet/>
        </>
  )
}


export default MovieDetails;
