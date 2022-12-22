import React, { useState, useEffect } from 'react';
import css from './Movies.module.css';
import {  useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'services/moviesAPI';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const query = searchParams.get('query');

  useEffect(() => {
    if (query === '' || query === null)  {
      return
    }

    fetchSearchMovies(query)
    .then(setMovies)
  }, [query]);

  const handleSearchSubmit = e => {
    e.preventDefault();

    if(query === "") {
      return alert("Sorry, there are no movies matching your search query")
    }
    setSearchParams({ query: e.currentTarget.elements.query.value.trim() });

    e.target.reset();
  };

  return (
    <>
      <form className={css.searchForm} onSubmit={handleSearchSubmit}>
        <input className={css.searchInput} name="query" type="text" />
        <button disabled={!movies}  className={css.searchBtn}>Search</button>
      </form>
       {movies && (
      <ul className={css.moviesList}>
        {movies.map(({ id, title }) => (
          <li className={css.moviesItem} key={id}>
            <Link state={{ from: location }} to={`${id}`}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
      )}
    </>
  );
};

export default Movies;
