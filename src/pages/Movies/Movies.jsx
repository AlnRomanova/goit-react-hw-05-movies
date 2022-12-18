import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'services/moviesAPI';
import { Outlet } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('title');

  useEffect(() => {
    if (query === '' || query === null) return;
    fetchSearchMovies(query).then(setMovies);
  }, [query]);

  const handleSearchSubmit = e => {
    e.preventDefault();
    const param = e.target.elements.param.value;
    setSearchParams({ title: param });
    e.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSearchSubmit}>
        <input name="param" type="text" />
        <button>Search</button>
      </form>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
        <Outlet />
      </ul>
    </>
  );
};

export default Movies;
