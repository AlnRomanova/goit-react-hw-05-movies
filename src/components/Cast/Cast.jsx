import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCredits } from 'services/moviesAPI';



const Cast = () =>  {

  const {movieId} = useParams();
  const [cast, setCast] = useState(null);
  
  useEffect(()=> {
    fetchCredits(movieId)
   .then(setCast)
   .catch(error => {
     console.log(error)
   });

  }, [movieId]);


 if (!cast) {
   return null
};


  return (
    <>
   <ul>
    {cast.map(({ id, character, profile_path , name }) => (
        <li key={id}>
      <p>Actor name: {name}</p>
      <img src={`https://image.tmdb.org/t/p/w200/${profile_path}`} alt={name} />
      <p>Character: {character}</p>
      </li>
       ))}
    </ul>
    </>
  )
}

export default Cast
