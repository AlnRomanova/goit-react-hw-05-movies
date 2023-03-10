import React, { useState, useEffect } from 'react';
import css from './Movies.module.css';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'services/moviesAPI';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }

    fetchSearchMovies(query).then(setMovies);
  }, [query]);

  const handleClick = e => {
    setInput(e.currentTarget.value);
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.currentTarget.elements.query.value.trim() });
    e.target.reset();
    setInput('');
  };

  return (
    <>
      <form className={css.searchForm} onSubmit={handleSearchSubmit}>
        <input
          className={css.searchInput}
          type="text"
          name="query"
          value={input}
          onChange={handleClick}
          placeholder="give me keywords.."

        />
        <button disabled={!input} className={css.searchBtn}>
          Search
        </button>
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
