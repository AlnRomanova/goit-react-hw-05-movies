import React from 'react';
import css from 'components/Cast/Cast.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCredits } from 'services/moviesAPI';
import defaultImage from 'image/default.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchCredits(movieId)
      .then(setCast)
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  if (!cast) {
    return null;
  }


  return (
    <>
      {cast.length ? (
        <ul className={css.castList}>
          {cast.map(({ id, character, profile_path, name }) => (
            <li className={css.castItem} key={id}>
            <img
                className={css.castImg}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : defaultImage
                }
                alt={name}
              />
              <p className={css.text}>{name}</p>
              <p className={css.text}>{character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.message}>
          We don't have any information about cast of this movie.
        </p>
      )}
    </>
  );
};

export default Cast;
