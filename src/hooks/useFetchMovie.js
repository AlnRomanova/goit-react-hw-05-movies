import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesById } from "services/moviesAPI";

const useFetchMovies = () => {
 const {id} = useParams();
 const [movie, setMovie] = useState(null);
  useEffect(()=> {
    fetchMoviesById(id).then(setMovie)
  }, [id]);

  return movie;


};



export default useFetchMovies;
